import { supabase } from './supabase';

export interface ChatMessage {
  id: string;
  chat_id: string;
  sender_id: string;
  message: string;
  created_at: string;
  read: boolean;
}

export interface Chat {
  id: string;
  worker_id: string;
  employer_id: string;
  created_at: string;
  last_message_at: string;
  worker_name?: string;
  employer_name?: string;
  last_message?: string;
  unread_count?: number;
}

export const chatService = {
  async getOrCreateChat(workerId: string, employerId: string): Promise<string> {
    // Check if chat already exists
    const { data: existingChat, error: searchError } = await supabase
      .from('VoyChats')
      .select('id')
      .eq('worker_id', workerId)
      .eq('employer_id', employerId)
      .maybeSingle();

    if (searchError) throw searchError;

    if (existingChat) {
      return existingChat.id;
    }

    // Create new chat
    const { data: newChat, error: createError } = await supabase
      .from('VoyChats')
      .insert({
        worker_id: workerId,
        employer_id: employerId,
        last_message_at: new Date().toISOString()
      })
      .select('id')
      .single();

    if (createError) throw createError;

    return newChat.id;
  },

  async sendMessage(chatId: string, senderId: string, message: string): Promise<void> {
    const { error: messageError } = await supabase
      .from('VoyChatMessages')
      .insert({
        chat_id: chatId,
        sender_id: senderId,
        message,
        read: false
      });

    if (messageError) throw messageError;

    // Update last_message_at in chat
    const { error: updateError } = await supabase
      .from('VoyChats')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', chatId);

    if (updateError) throw updateError;
  },

  async getMessages(chatId: string): Promise<ChatMessage[]> {
    const { data, error } = await supabase
      .from('VoyChatMessages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getChatsForUser(userId: string, userRole: 'WORKER' | 'COMPANY' | 'PARTICULAR'): Promise<Chat[]> {
    const isEmployer = userRole === 'COMPANY' || userRole === 'PARTICULAR';
    
    const query = supabase
      .from('VoyChats')
      .select(`
        id,
        worker_id,
        employer_id,
        created_at,
        last_message_at,
        worker:VoyUsers!VoyChats_worker_id_fkey(name),
        employer:VoyUsers!VoyChats_employer_id_fkey(name)
      `)
      .order('last_message_at', { ascending: false });

    if (isEmployer) {
      query.eq('employer_id', userId);
    } else {
      query.eq('worker_id', userId);
    }

    const { data: chats, error } = await query;

    if (error) throw error;

    // Get unread count and last message for each chat
    const chatsWithDetails = await Promise.all(
      (chats || []).map(async (chat: any) => {
        // Get last message
        const { data: lastMessage } = await supabase
          .from('VoyChatMessages')
          .select('message')
          .eq('chat_id', chat.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        // Get unread count
        const { count } = await supabase
          .from('VoyChatMessages')
          .select('*', { count: 'exact', head: true })
          .eq('chat_id', chat.id)
          .eq('read', false)
          .neq('sender_id', userId);

        return {
          id: chat.id,
          worker_id: chat.worker_id,
          employer_id: chat.employer_id,
          created_at: chat.created_at,
          last_message_at: chat.last_message_at,
          worker_name: chat.worker?.name || 'Usuario',
          employer_name: chat.employer?.name || 'Usuario',
          last_message: lastMessage?.message || '',
          unread_count: count || 0
        };
      })
    );

    return chatsWithDetails;
  },

  async markAsRead(chatId: string, userId: string): Promise<void> {
    const { error } = await supabase
      .from('VoyChatMessages')
      .update({ read: true })
      .eq('chat_id', chatId)
      .neq('sender_id', userId)
      .eq('read', false);

    if (error) throw error;
  },

  subscribeToMessages(chatId: string, callback: (message: ChatMessage) => void) {
    return supabase
      .channel(`chat:${chatId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'VoyChatMessages',
        filter: `chat_id=eq.${chatId}`
      }, (payload) => {
        callback(payload.new as ChatMessage);
      })
      .subscribe();
  }
};
