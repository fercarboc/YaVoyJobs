import React, { useEffect, useState } from 'react';
import { getSectorsOrdered, Sector } from '../services/sectorsService';
import { getMicrotasksBySector, MicroTask } from '../services/microtasksService';
import { createJob } from '../services/jobsService';
import { getJobTicket } from '../services/jobTicketService';
import { JobTicketCard } from '../components/JobTicket';
import { startCommissionPayment } from '../services/commissionPaymentService';

const PLATFORM_FEE = 3; // TODO: leer de planes/bonos

export default function CreateJobScreen() {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [microtasks, setMicrotasks] = useState<MicroTask[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedMicrotask, setSelectedMicrotask] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobId, setJobId] = useState<string | null>(null);
  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    getSectorsOrdered().then(setSectors).catch(() => setError('Error cargando sectores.'));
  }, []);

  useEffect(() => {
    if (selectedSector) {
      getMicrotasksBySector(selectedSector).then(setMicrotasks).catch(() => setError('Error cargando microtareas.'));
    } else {
      setMicrotasks([]);
    }
    setSelectedMicrotask('');
  }, [selectedSector]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const job = await createJob({ title, description, microtask_id: selectedMicrotask });
      setJobId(job.id);
      const ticketData = await getJobTicket(job.id);
      setTicket(ticketData);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handlePayCommission = async () => {
    if (!jobId || !ticket) return;
    setPaymentLoading(true);
    setError('');
    try {
      // Simulación: el usuario debe estar autenticado, aquí se usa un userId simulado
      const userId = 'demo-user-id'; // TODO: obtener del contexto de auth real
      await startCommissionPayment({
        jobId,
        payerUserId: userId,
        totalFee: (ticket.insurance?.insurance_fee || 0) + PLATFORM_FEE,
        currency: ticket.insurance?.currency || 'EUR',
      });
      setPaymentSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
    setPaymentLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Crear Anuncio</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-sm font-bold mb-1">Sector</label>
          <select value={selectedSector} onChange={e => setSelectedSector(e.target.value)} className="w-full border rounded p-2">
            <option value="">Selecciona sector</option>
            {sectors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Microtarea</label>
          <select value={selectedMicrotask} onChange={e => setSelectedMicrotask(e.target.value)} className="w-full border rounded p-2" disabled={!selectedSector}>
            <option value="">Selecciona microtarea</option>
            {microtasks.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Título</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Descripción</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded p-2" required />
        </div>
        <button type="submit" className="bg-brand-600 text-white px-6 py-2 rounded font-bold" disabled={loading || !selectedMicrotask}>
          {loading ? 'Guardando...' : 'Crear anuncio'}
        </button>
      </form>
      {ticket && (
        <div className="mt-8 space-y-4">
          <JobTicketCard ticket={ticket} platformFee={PLATFORM_FEE} />
          {!paymentSuccess ? (
            <button
              className="bg-green-600 text-white px-6 py-2 rounded font-bold w-full"
              onClick={handlePayCommission}
              disabled={paymentLoading}
            >
              {paymentLoading ? 'Procesando pago...' : 'Pagar comisión y seguro'}
            </button>
          ) : (
            <div className="text-green-700 font-bold text-center">¡Pago realizado con éxito!</div>
          )}
        </div>
      )}
    </div>
  );
}
