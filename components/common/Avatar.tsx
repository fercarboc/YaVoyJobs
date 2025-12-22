import React from 'react';

export function UserAvatar({ user, size = 48 }: { user: any, size?: number }) {
  const photoUrl = user.selfie_photo_url || user.logo_url || null;
  return photoUrl ? (
    <img
      src={photoUrl}
      alt="Avatar"
      className="rounded-full object-cover border-2 border-brand-500"
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      className="rounded-full bg-white text-brand-600 font-bold flex items-center justify-center border-2 border-brand-500"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      {user.full_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U'}
    </div>
  );
}
