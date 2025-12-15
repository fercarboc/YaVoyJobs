
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardModal } from './components/DashboardModal';
import { SubscriptionPanel } from './components/SubscriptionPanel';
import { SubscriptionPaymentModal } from './components/SubscriptionPaymentModal';
import { FinancialPanel } from './components/FinancialPanel';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthState, UserRole, User, Job, JobStatus, PeriodType, ContractType, DAYS_OF_WEEK, CompanySector } from './types';
import { Icons } from './components/Icons';
import { optimizeJobDescription, suggestJobPrice } from './services/geminiService';
import { supabase } from './services/supabase';
import { LegalNotice, PrivacyPolicy, CookiesPolicy, TermsOfUse } from './components/LegalPages';
import { SubscriptionType } from './services/subscriptionService';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

// --- INITIAL STATE ---
const INITIAL_AUTH: AuthState = { isAuthenticated: false, user: null, loading: true };

// --- COMPONENTS ---

// Sectors Page
const SectorsPage = () => {
  const [sectors, setSectors] = useState<any[]>([]);
  const [selectedSector, setSelectedSector] = useState<any | null>(null);
  const [microTasks, setMicroTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSectors();
  }, []);

  useEffect(() => {
    if (selectedSector && selectedSector.id) {
      loadMicroTasks(selectedSector.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSector?.id]);

  const loadSectors = async () => {
    try {
      const { data, error } = await supabase
        .from('VoySectors')
        .select('*')
        .order('is_primary', { ascending: false })
        .order('name', { ascending: true });
      if (error) throw error;
      setSectors(data || []);
      // Selecciona siempre el primer sector de la lista
      if (data && data.length > 0) {
        setSelectedSector({ ...data[0] });
      }
    } catch (err) {
      console.error('Error loading sectors:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMicroTasks = async (sectorId: string) => {
    try {
      const { data, error } = await supabase
        .from('VoyMicroTasks')
        .select('*')
        .eq('sector_id', sectorId)
        .order('name', { ascending: true });
      
      if (error) throw error;
      setMicroTasks(data || []);
    } catch (err) {
      console.error('Error loading microtasks:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando sectores...</p>
        </div>
      </div>
    );
  }

  const allSectors = sectors;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Sectores de Servicios
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre todos los servicios disponibles en YaVoy. Desde tecnología hasta cuidado de mayores, 
            encuentra ayuda profesional en tu zona.
          </p>
        </div>

       {/* Two Column Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* Left Column - Sectors List (Card con scroll) */}
  <div className="lg:col-span-1">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide">
          Sectores
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Selecciona un sector para ver ejemplos
        </p>
      </div>
      {/* Scroll */}
      <div className="p-3 overflow-y-auto max-h-[calc(100vh-210px)] space-y-2">
        {allSectors.map(sector => (
          <button
            key={sector.id}
            onClick={() => setSelectedSector({ ...sector })}
            className={`w-full text-left p-4 rounded-xl transition flex items-center gap-3 ${
              selectedSector?.id === sector.id
                ? 'bg-brand-500 text-white shadow-lg'
                : 'bg-white hover:bg-brand-50 text-slate-900 border border-gray-200'
            }`}
          >
            <span className="text-2xl">{sector.emoji}</span>
            <div className="flex-1">
              <p className={`font-semibold text-sm ${
                selectedSector?.id === sector.id ? 'text-white' : 'text-slate-900'
              }`}>
                {sector.name}
              </p>
            </div>
            {selectedSector?.id === sector.id && (
              <Icons.ArrowRight size={20} className="text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Right Column - Sector Details (usa SIEMPRE microTasks del estado) */}
  <div className="lg:col-span-2">
    {selectedSector && (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{selectedSector.emoji}</span>
            <div>
              <h2 className="text-3xl font-bold mb-1">{selectedSector.name}</h2>
              <p className="text-brand-100">{selectedSector.description}</p>
            </div>
          </div>
        </div>

        {/* Content con altura controlada */}
        <div className="p-8 overflow-y-auto max-h-[calc(100vh-230px)]">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Icons.CheckCircle size={24} className="text-brand-500" />
            Servicios que puedes solicitar
          </h3>

          {/* microTasks salen del estado, no de selectedSector */}
          {microTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {microTasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-brand-50 transition group"
                >
                  <div className="bg-brand-500 rounded-full p-2 group-hover:scale-110 transition">
                    <Icons.Check size={16} className="text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{task.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-center py-8">
              No hay servicios definidos aún para este sector.
            </p>
          )}

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                ¿Necesitas alguno de estos servicios?
              </h4>
              <p className="text-slate-600 mb-4">
                Regístrate gratis y publica tu solicitud. Trabajadores cualificados en tu zona
                te contactarán en minutos.
              </p>
              <div className="flex gap-3">
                <a
                  href="#/register"
                  className="bg-brand-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-600 transition inline-flex items-center gap-2"
                >
                  <Icons.User size={18} />
                  Registrarse Gratis
                </a>
                <a
                  href="#/"
                  className="bg-white text-brand-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition border border-brand-200"
                >
                  Ver Cómo Funciona
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )}
  </div>
</div>

      </div>
    </div>
  );
};




// 1. LANDING PAGE
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">
     
{/* 1. HERO SECTION */}
<section className="relative bg-gradient-to-br from-brand-500 to-brand-700 text-white pt-12 pb-24 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 100 C 30 50 70 50 100 100 L 100 0 L 0 0 Z" fill="white" />
    </svg>
  </div>

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* ===== TITULARES FULL WIDTH ===== */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        ¿Necesitas ayuda cerca de casa?
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-brand-100">
        ¿Quieres trabajar en tu barrio?
      </h2>
    </div>

    {/* ===== CONTENIDO A DOS COLUMNAS ===== */}
   <div className="grid md:grid-cols-2 gap-12 md:items-start items-center">


      {/* COLUMNA IZQUIERDA */}
      <div className="space-y-6 text-center md:text-left">
        <div className="text-lg md:text-xl text-brand-50 max-w-lg mx-auto md:mx-0 leading-relaxed space-y-2">
          <p>Microservicios en tu barrio: rápido, fácil y de confianza.</p>

          
        </div>


   

        {/* Quick Categories (3 + 4 NUEVOS) */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 py-2">
          {/* 3 existentes */}
          <button
            onClick={() => {
              const el = document.getElementById("servicios");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <Icons.PawPrint size={24} />
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Mascotas</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("servicios");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <Icons.ShoppingCart size={24} />
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Recados</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("servicios");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center group"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <Icons.Heart size={24} />
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Cuidados</span>
          </button>

          {/* 4 NUEVOS (emoji para no depender de Icons nuevos) */}
          <button
            onClick={() => navigate("/sectores")}
            className="flex flex-col items-center group"
            title="Servicios para empresas"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition text-2xl">
              🍽️
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Hostelería</span>
          </button>

          <button
            onClick={() => navigate("/sectores")}
            className="flex flex-col items-center group"
            title="Reparto y paquetería"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition text-2xl">
              🚚
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Reparto</span>
          </button>

          <button
            onClick={() => navigate("/sectores")}
            className="flex flex-col items-center group"
            title="Limpieza"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition text-2xl">
              🧼
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Limpieza</span>
          </button>

          <button
            onClick={() => navigate("/sectores")}
            className="flex flex-col items-center group"
            title="Reparaciones"
          >
            <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition text-2xl">
              🔧
            </div>
            <span className="text-sm mt-2 font-medium opacity-90">Reparaciones</span>
          </button>
        </div>

        {/* BLOQUE INCENTIVOS (NUEVO) */}
        <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 md:p-5">
          <p className="font-bold text-white text-base md:text-lg">
            ¿Quieres trabajar, necesitas ayuda o buscas personal para tu empresa?
          </p>
          <p className="text-white/90 mt-1 text-sm md:text-base leading-relaxed">
            Date de alta y empieza hoy:{" "}
            <span className="font-semibold">gana dinero</span> ofreciendo servicios en tu barrio,
            o publica una tarea para que un vecino te eche una mano.
          </p>

          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-brand-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-brand-50 transition transform hover:-translate-y-0.5"
            >
              Quiero trabajar (alta gratis)
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-0.5"
            >
              Necesito ayuda / Publicar tarea
            </button>
          </div>

          <p className="mt-3 text-xs text-white/70">
            Incentivos en la app: recompensas de bienvenida, reputación por reseñas y más visibilidad por buen servicio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
          <button
            onClick={() => navigate("/download")}
            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1 flex items-center justify-center"
          >
            <Icons.Download className="mr-2" size={20} />
            Descargar App
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-50 transition transform hover:-translate-y-1"
          >
            Registrarse
          </button>
        </div>
      </div>

    {/* Cleaner App Visual (tu bloque derecho) */}
<div className="relative mt-10 md:mt-0">
  <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl relative transform rotate-1 hover:rotate-0 transition duration-500">
    {/* App Interface Mockup */}
    <div className="bg-white rounded-2xl h-96 w-full overflow-hidden relative border border-slate-200 shadow-inner flex flex-col">
      {/* Mock Header */}
      <div className="bg-brand-500 p-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Icons.User size={16} />
          </div>
          <div className="h-2 w-24 bg-white/20 rounded"></div>
        </div>
        <Icons.Menu size={20} className="opacity-70" />
      </div>

      {/* Mock Content */}
      <div className="p-4 space-y-3 bg-slate-50 flex-grow relative">
        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3">
          <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
            <Icons.ShoppingCart size={16} />
          </div>
          <div className="space-y-0.5 flex-grow">
            <div className="text-xs font-bold text-slate-800">Hacer la compra</div>
            <div className="text-[10px] text-slate-500">y subirla a casa</div>
          </div>
          <div className="text-emerald-600 font-bold text-xs">15€</div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3 opacity-90">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <Icons.PawPrint size={16} />
          </div>
          <div className="space-y-0.5 flex-grow">
            <div className="text-xs font-bold text-slate-800">Pasear a Boby</div>
            <div className="text-[10px] text-slate-500">1 hora</div>
          </div>
          <div className="text-blue-600 font-bold text-xs">10€</div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3 opacity-80">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
            <Icons.Hammer size={16} />
          </div>
          <div className="space-y-0.5 flex-grow">
            <div className="text-xs font-bold text-slate-800">Montar estantería</div>
            <div className="text-[10px] text-slate-500">tipo Ikea</div>
          </div>
          <div className="text-amber-600 font-bold text-xs">25€</div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3 opacity-75">
          <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
            <Icons.Briefcase size={16} />
          </div>
          <div className="space-y-0.5 flex-grow">
            <div className="text-xs font-bold text-slate-800">Apoyo en evento</div>
            <div className="text-[10px] text-slate-500">hostelería</div>
          </div>
          <div className="text-purple-600 font-bold text-xs">60€</div>
        </div>

        {/* Floating "Accepted" Notification */}
        <div
          className="absolute bottom-6 right-6 left-6 bg-slate-900 text-white p-3 rounded-lg shadow-xl flex items-center space-x-3"
          style={{ animation: 'yavoyFloat 3s ease-in-out infinite' }}
        >
          <div className="bg-green-500 rounded-full p-1">
            <Icons.CheckCircle size={12} />
          </div>
          <div className="text-xs font-medium">¡Juan aceptó tu tarea!</div>
        </div>
      </div>
    </div>
  </div>

  {/* Keyframes inline (sin tocar CSS global) */}
  <style>
    {`
      @keyframes yavoyFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
    `}
  </style>
</div>
</div>
</div>
</section>

      {/* 2. HOW IT WORKS */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Cómo funciona YaVoy?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg">
             Una plataforma transparente donde el esfuerzo tiene su recompensa.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Step 1 */}
            <div className="w-full md:w-1/3 bg-brand-600 p-8 rounded-3xl shadow-xl flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-600 mb-6 shadow-md">
                 <Icons.Edit3 size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">1. Publica tu tarea</h3>
               <p className="text-blue-100 px-2 leading-relaxed">
                 Describe qué necesitas y <span className="font-bold text-white underline decoration-emerald-400">propón lo que quieres pagar</span>.
               </p>
            </div>
            
            {/* Arrow 1 */}
            <div className="text-emerald-500 transform rotate-90 md:rotate-0 flex-shrink-0">
                <Icons.ArrowRight size={48} strokeWidth={3} />
            </div>

            {/* Step 2 */}
            <div className="w-full md:w-1/3 bg-brand-600 p-8 rounded-3xl shadow-xl flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-600 mb-6 shadow-md">
                 <Icons.UserCheck size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">2. Elige Ayudante</h3>
               <p className="text-blue-100 px-2 leading-relaxed">Vecinos de tu zona revisan tu oferta. Elige perfiles verificados.</p>
            </div>

            {/* Arrow 2 */}
            <div className="text-emerald-500 transform rotate-90 md:rotate-0 flex-shrink-0">
                <Icons.ArrowRight size={48} strokeWidth={3} />
            </div>

            {/* Step 3 */}
            <div className="w-full md:w-1/3 bg-brand-600 p-8 rounded-3xl shadow-xl flex flex-col items-center text-white transform hover:scale-105 transition duration-300">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-600 mb-6 shadow-md">
                 <Icons.Star size={32} />
               </div>
               <h3 className="text-xl font-bold mb-2">3. Trabajo hecho</h3>
               <p className="text-blue-100 px-2 leading-relaxed">Valora el servicio. El pago se realiza de forma segura y directa.</p>
            </div>

          </div>
        </div>
      </section>




      {/* 3. SERVICES (NICHE) */}
     <section id="servicios" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900">Secciones de Ayuda</h2>
      <p className="text-lg text-slate-500 mt-2">Pequeñas tareas que marcan una gran diferencia.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* SENIORS */}
      <div className="bg-blue-50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-blue-100 overflow-hidden">
        <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=600"
            alt="Acompañamiento mayores"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Para Mayores</h3>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-brand-500 mr-2" /> Acompañamiento médico
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-brand-500 mr-2" /> Subir la compra
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-brand-500 mr-2" /> Configurar el móvil
          </li>
        </ul>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 rounded-xl bg-white text-brand-600 font-bold hover:shadow-lg transition shadow-sm border border-brand-100"
        >
          Piensa en tus padres
        </button>
      </div>

      {/* HOME */}
      <div className="bg-amber-50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-amber-100 overflow-hidden">
        <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"
            alt="Montar muebles"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Para Casa</h3>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-amber-500 mr-2" /> Montar mueble
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-amber-500 mr-2" /> Cambiar bombillas
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-amber-500 mr-2" /> Ordenar armarios
          </li>
        </ul>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 rounded-xl bg-white text-amber-600 font-bold hover:shadow-lg transition shadow-sm border border-amber-100"
        >
          Te echamos una mano
        </button>
      </div>

      {/* PETS */}
      <div className="bg-emerald-50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-emerald-100 overflow-hidden">
        <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600"
            alt="Pasear perro"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Mascotas</h3>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-emerald-500 mr-2" /> Paseo de tu perro
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-emerald-500 mr-2" /> Visitas al veterinario
          </li>
          <li className="flex items-center text-slate-700">
            <Icons.CheckCircle size={18} className="text-emerald-500 mr-2" /> Cuidado en vacaciones
          </li>
        </ul>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 rounded-xl bg-white text-emerald-600 font-bold hover:shadow-lg transition shadow-sm border border-emerald-100"
        >
          Para tu mejor amigo
        </button>
      </div>
    </div>

    {/* ===== Incentivos: Trabajadores + Empresas ===== */}
    <div className="grid lg:grid-cols-2 gap-6 mt-16">
      {/* WORKERS */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
        <div className="flex items-start gap-4 mb-5">
          <div className="bg-emerald-500 rounded-full p-3 flex-shrink-0">
            <Icons.Briefcase size={26} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">¿Quieres trabajar en tu barrio?</h3>
            <p className="text-slate-600 mt-1">
              Date de alta gratis y empieza a ganar dinero con tareas cerca de casa. Tú eliges disponibilidad.
            </p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-slate-700 mb-6">
          <li className="flex items-start">
            <Icons.Check size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Gana dinero con recados, cuidados, limpieza y reparaciones.</span>
          </li>
          <li className="flex items-start">
            <Icons.Check size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Reputación y reseñas: cuanto mejor trabajas, más te eligen.</span>
          </li>
          <li className="flex items-start">
            <Icons.Check size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Pagos claros y seguros (sin perseguir a nadie).</span>
          </li>
          <li className="flex items-start">
            <Icons.Check size={16} className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Identidad verificada (DNI/NIE + selfie) para confianza real.</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/register")}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition"
          >
            Quiero trabajar
          </button>
          <button
            onClick={() => navigate("/download")}
            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition"
          >
            Descargar App
          </button>
        </div>
      </div>

      {/* COMPANIES */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
        <div className="flex items-start gap-4 mb-5">
          <div className="bg-slate-900 rounded-full p-3 flex-shrink-0">
            <Icons.Building2 size={26} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">¿Eres empresa y necesitas refuerzo?</h3>
            <p className="text-slate-600 mt-1">
              Consigue ayuda por horas o por tarea en periodos punta. Publicas y recibes candidatos del barrio.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Icons.Coffee size={18} className="text-brand-600" /> Hostelería
            </div>
            <p className="text-xs text-slate-600 mt-1">Barra, sala, apoyo cocina, eventos.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Icons.Package size={18} className="text-brand-600" /> Reparto / Paquetería
            </div>
            <p className="text-xs text-slate-600 mt-1">Picos de entregas, rutas cortas.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Icons.Sparkles size={18} className="text-brand-600" /> Limpieza
            </div>
            <p className="text-xs text-slate-600 mt-1">Local, oficinas, refuerzos puntuales.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Icons.Tool size={18} className="text-brand-600" /> Reparaciones
            </div>
            <p className="text-xs text-slate-600 mt-1">Manitas, mantenimiento, pequeñas obras.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/register")}
            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition"
          >
            Soy empresa
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-1 bg-white hover:bg-gray-50 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-sm border border-gray-200 transition"
          >
            Hablar con YaVoy
          </button>
        </div>
      </div>
    </div>

    {/* ===== Value Proposition for Particulares (igual, pero dentro del contenedor) ===== */}
    <div className="max-w-4xl mx-auto mt-16">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
            <Icons.Euro size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Menos que 2 cafés al mes</h3>
            <p className="text-slate-600 text-lg">
              Por solo <strong className="text-blue-600">3€</strong> por tarea + la cantidad que decidas pagar
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-3">Ejemplo: Ayuda con la compra</h4>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <span>Comisión plataforma:</span>
                <strong className="text-blue-600">3€</strong>
              </div>
              <div className="flex justify-between">
                <span>Recompensa para el ayudante:</span>
                <strong>10€</strong>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-base">
                <span>Total:</span>
                <span className="text-blue-600">13€</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">✓ Tu padre recibe ayuda, tú pagas menos que una cena</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-3">Ventajas</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start">
                <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Vecinos de confianza cerca de casa</span>
              </li>
              <li className="flex items-start">
                <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Tú decides cuánto pagar por la ayuda</span>
              </li>
              <li className="flex items-start">
                <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Tranquilidad para ti y para los tuyos</span>
              </li>
              <li className="flex items-start">
                <Icons.Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Sin suscripciones ni compromisos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition"
          >
            Empezar ahora - Solo 3€ por tarea
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* NEW: COMPANIES ZONE */}
      <section id="empresas" className="py-20 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 p-12 opacity-5">
            <Icons.Building size={400} />
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold mb-4">Zona Empresas y Comercios</h2>
                   <p className="text-slate-300 max-w-xl text-lg">
                      Publica ofertas de empleo temporal, refuerzos para fin de semana o puestos estables.
                      <span className="block text-brand-400 font-bold mt-2">Encuentra personal cerca de tu negocio.</span>
                   </p>
                </div>
                <div className="mt-8 md:mt-0">
                   <button onClick={() => navigate('/register')} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-500/30 transition flex items-center">
                      <Icons.Briefcase className="mr-2" /> Soy Empresa
                   </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Job Card Example 1 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                   <div className="flex justify-between items-start mb-4">
                      <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">HOSTELERÍA</div>
                      <span className="text-brand-300 font-bold">12€ / hora</span>
                   </div>
                   <h3 className="font-bold text-xl mb-2">Camarero de Refuerzo</h3>
                   <p className="text-slate-400 text-sm mb-4">Para viernes y sábados noche. Zona Legazpi.</p>
                   <ul className="space-y-2 text-sm text-slate-300 mb-6">
                      <li className="flex items-center"><Icons.CheckCircle size={14} className="mr-2 text-emerald-400"/> Alta en Seguridad Social</li>
                      <li className="flex items-center"><Icons.Clock size={14} className="mr-2 text-emerald-400"/> 10 horas/semana</li>
                   </ul>
                   <div className="flex items-center text-xs text-slate-500">
                      <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center mr-2 font-bold">BR</span> Bar Restaurante
                   </div>
                </div>

                {/* Job Card Example 2 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                   <div className="flex justify-between items-start mb-4">
                      <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">LOGÍSTICA</div>
                      <span className="text-brand-300 font-bold">650€ / mes</span>
                   </div>
                   <h3 className="font-bold text-xl mb-2">Repartidor 1/2 Jornada</h3>
                   <p className="text-slate-400 text-sm mb-4">Reparto a pie/bici en barrio Arganzuela.</p>
                   <ul className="space-y-2 text-sm text-slate-300 mb-6">
                      <li className="flex items-center"><Icons.CheckCircle size={14} className="mr-2 text-emerald-400"/> Contrato Indefinido</li>
                      <li className="flex items-center"><Icons.Clock size={14} className="mr-2 text-emerald-400"/> Lunes a Viernes</li>
                   </ul>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center mr-2 font-bold">PL</span> Paquetería Local
                   </div>
                </div>

                {/* Job Card Example 3 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                   <div className="flex justify-between items-start mb-4">
                      <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">ADMIN</div>
                      <span className="text-brand-300 font-bold">15€ / hora</span>
                   </div>
                   <h3 className="font-bold text-xl mb-2">Auxiliar Administrativo</h3>
                   <p className="text-slate-400 text-sm mb-4">Ayuda puntual para cierre de trimestre.</p>
                   <ul className="space-y-2 text-sm text-slate-300 mb-6">
                      <li className="flex items-center"><Icons.CheckCircle size={14} className="mr-2 text-emerald-400"/> Trabajo por horas</li>
                      <li className="flex items-center"><Icons.Clock size={14} className="mr-2 text-emerald-400"/> Presencial 3 días</li>
                   </ul>
                   <div className="flex items-center text-xs text-slate-500">
                      <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center mr-2 font-bold">G</span> Gestoría
                   </div>
                </div>
            </div>

            {/* Bonos Section */}
            <div className="mt-16 bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500 rounded-full p-3">
                  <Icons.Gift size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bonos de Contratación</h3>
                  <p className="text-purple-200">Ahorra dinero con nuestros planes mensuales</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-purple-200 text-sm mb-2">Mensual</div>
                  <div className="text-3xl font-bold mb-4">15€<span className="text-lg text-purple-300">/mes</span></div>
                  <p className="text-sm text-purple-100 mb-4">Contrataciones ilimitadas durante 30 días</p>
                  <div className="text-xs text-purple-200">✓ 0€ por contratación</div>
                </div>

                <div className="bg-purple-500/30 rounded-xl p-6 border-2 border-purple-400 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMENDADO
                  </div>
                  <div className="text-purple-200 text-sm mb-2">Semestral</div>
                  <div className="text-3xl font-bold mb-4">75€<span className="text-lg text-purple-300">/6 meses</span></div>
                  <p className="text-sm text-purple-100 mb-4">Contrataciones ilimitadas durante 180 días</p>
                  <div className="text-xs text-green-300">✓ Ahorras 15€ (12.5€/mes)</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-purple-200 text-sm mb-2">Anual</div>
                  <div className="text-3xl font-bold mb-4">120€<span className="text-lg text-purple-300">/año</span></div>
                  <p className="text-sm text-purple-100 mb-4">Contrataciones ilimitadas durante 365 días</p>
                  <div className="text-xs text-green-300">✓ Ahorras 60€ (10€/mes)</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Icons.Info size={18} className="mr-2 text-purple-300" />
                  ¿Por qué un bono?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-100">
                  <div>
                    <p className="mb-2"><strong className="text-white">Sin bono:</strong></p>
                    <ul className="space-y-1 text-purple-200">
                      <li>• 1 contratación = 15€ de comisión</li>
                      <li>• 2 contrataciones = 30€</li>
                      <li>• 5 contrataciones = 75€</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-white">Con bono mensual (15€):</strong></p>
                    <ul className="space-y-1 text-green-300">
                      <li>✓ Contrataciones ilimitadas sin comisión</li>
                      <li>✓ Rentable desde la 2ª contratación</li>
                      <li>✓ Ideal si contratas regularmente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>




     {/* 4. TRUST & SAFETY & REVIEWS */}
<section id="opiniones" className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900">Lo que dicen nuestros vecinos</h2>
      <p className="text-lg text-slate-500 mt-2">Transacciones reales, personas reales.</p>
    </div>

    {/* REVIEWS GRID (ahora incluye Empresa) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {/* Review 1 - Client */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
        <div className="absolute top-4 right-4 bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          Cliente
        </div>
        <div className="flex items-center mb-4 text-yellow-400">
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
        </div>
        <p className="text-slate-700 text-sm italic mb-4">
          "Me arreglaron el grifo de la cocina en una hora. Rápido y muy apañado."
        </p>
        <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-900">Carmen L.</span>
          <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">Pagué 40€</span>
        </div>
      </div>

      {/* Review 2 - Helper */}
      <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 relative">
        <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          Ayudante
        </div>
        <div className="flex items-center mb-4 text-yellow-400">
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
        </div>
        <p className="text-slate-700 text-sm italic mb-4">
          "Ayudé con una mudanza pequeña el sábado por la mañana. Dinero extra muy fácil."
        </p>
        <div className="border-t border-brand-200 pt-3 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-900">Javier M.</span>
          <span className="text-xs bg-emerald-200 px-2 py-1 rounded text-emerald-800 font-bold">Gané 60€</span>
        </div>
      </div>

      {/* Review 3 - Empresa (Hostelería / horas punta) */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
        <div className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          Empresa
        </div>
        <div className="flex items-center mb-4 text-yellow-400">
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
        </div>
        <p className="text-slate-700 text-sm italic mb-4">
          "Necesitábamos refuerzo en barra un sábado. En 30 minutos teníamos ayuda y todo perfecto."
        </p>
        <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-900">Bar La Ribera</span>
          <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">Hora punta</span>
        </div>
      </div>

      {/* Review 4 - Empresa (Reparto / Paquetería) */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
        <div className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          Empresa
        </div>
        <div className="flex items-center mb-4 text-yellow-400">
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
          <Icons.Star fill="currentColor" size={16} />
        </div>
        <p className="text-slate-700 text-sm italic mb-4">
          "Teníamos picos de entregas. Publicamos una ayuda y lo resolvimos rápido sin líos."
        </p>
        <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-900">Mensajería Local</span>
          <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">Reparto</span>
        </div>
      </div>
    </div>

    {/* Mini CTA incentivo bajo reseñas */}
    <div className="mb-16">
      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
            ¿Quieres trabajar o necesitas ayuda hoy?
          </h3>
          <p className="text-slate-600 mt-1 max-w-2xl">
            Date de alta gratis y empieza en tu barrio: publica una tarea o gana dinero ayudando a vecinos y empresas
            (hostelería, reparto/paquetería, limpieza y reparaciones).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={() => navigate("/register")}
            className="w-full md:w-auto bg-brand-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-brand-600 transition transform hover:-translate-y-0.5"
          >
            Quiero trabajar
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition transform hover:-translate-y-0.5"
          >
            Necesito ayuda / Empresa
          </button>
        </div>
      </div>
    </div>

    {/* Trust & Safety (tu bloque, con 1 ajuste ligero de copy) */}
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 hidden md:block">
        <div className="bg-brand-50 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Icons.Shield size={200} />
          </div>
          <h3 className="text-2xl font-bold text-brand-800 mb-4">Garantía YaVoy</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600">
                <Icons.CheckCircle size={20} />
              </div>
              <p className="text-brand-900 text-sm">
                Los pagos se liberan solo cuando confirmas que el trabajo está hecho.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600">
                <Icons.UserCheck size={20} />
              </div>
              <p className="text-brand-900 text-sm">
                Todos los ayudantes pasan un proceso de verificación de identidad.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600">
                <Icons.MessageCircle size={20} />
              </div>
              <p className="text-brand-900 text-sm">
                Soporte directo para mediar en cualquier incidencia.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Seguridad y confianza ante todo</h2>
        <p className="text-lg text-slate-500">
          YaVoy es comunidad, no anonimato. Para particulares, mayores y empresas: perfiles verificados y reputación visible.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1">
              <Icons.UserCheck size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Verificación de identidad</h4>
              <p className="text-sm text-slate-600">Sabes quién viene a tu casa. Verificamos DNIs y perfiles.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1">
              <Icons.Star size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Valoraciones reales</h4>
              <p className="text-sm text-slate-600">Tú eliges basándote en la experiencia de otros vecinos.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1">
              <Icons.MessageCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Chat seguro</h4>
              <p className="text-sm text-slate-600">
                Habla y acuerda detalles sin necesidad de dar tu número personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* 5. LOCATION */}
      <section id="donde" className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <Icons.MapPin size={48} className="mx-auto md:mx-0 text-brand-400 mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Empezamos en <span className="text-brand-400">Arganzuela y Usera</span></h2>
                    <p className="text-xl text-slate-300 mb-8">
                       Delicias, Legazpi, Chopera, Moscardó, Almendrales, Orcasitas... <br/>
                       Somos gente de Madrid que cree que todos necesitamos una mano a veces.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-xl mx-auto md:mx-0">
                       <h3 className="font-bold text-lg mb-4">¿Quieres YaVoy en tu barrio?</h3>
                       <div className="flex flex-col sm:flex-row gap-2">
                         <input type="email" placeholder="Tu email" className="flex-grow px-4 py-3 rounded-lg text-slate-900 bg-white outline-none focus:ring-2 focus:ring-brand-500" />
                         <input type="text" placeholder="Tu C.P." className="w-full sm:w-24 px-4 py-3 rounded-lg text-slate-900 bg-white outline-none focus:ring-2 focus:ring-brand-500" />
                         <button className="bg-brand-500 px-6 py-3 rounded-lg font-bold hover:bg-brand-600 transition text-white">Avisadme</button>
                       </div>
                    </div>
                </div>

                <div>
                    <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        <iframe
                           title="Mapa YaVoy"
                           loading="lazy"
                           src="https://www.openstreetmap.org/export/embed.html?bbox=-3.73%2C40.36%2C-3.66%2C40.43&layer=mapnik&marker=40.402%2C-3.695"
                           style={{ border: 0, width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="text-xs text-slate-400 mt-2">Mapa de la zona de influencia (Arganzuela y Usera). Fuente: OpenStreetMap</div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contacto y Ayuda</h2>
              <p className="text-lg text-slate-600 mb-8">
                ¿Tienes dudas sobre cómo funciona? ¿Eres un comercio local y quieres colaborar? Escríbenos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                   <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mr-4">
                     <Icons.MessageCircle size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-bold uppercase">Email</p>
                     <p className="text-lg font-bold text-slate-900">hola@yavoy.app</p>
                   </div>
                </div>
                <div className="flex items-center">
                   <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mr-4">
                     <Icons.Smartphone size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-bold uppercase">Teléfono</p>
                     <p className="text-lg font-bold text-slate-900">+34 91 123 45 67</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-1">Nombre</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="tu@email.com" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-1">Mensaje</label>
                   <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition">Enviar Consulta</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Hoy te ayudo yo, <br/>mañana me ayudas tú.
           </h2>
           <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
             Descarga la app y únete a la red de ayuda vecinal más grande de tu barrio.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="flex items-center justify-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition shadow-xl transform hover:-translate-y-1">
                 <Icons.Smartphone size={24}/>
                 <div className="text-left">
                    <p className="text-xs uppercase opacity-80">Disponible en</p>
                    <p className="font-bold text-lg leading-none">App Store</p>
                 </div>
               </button>
               <button className="flex items-center justify-center space-x-3 bg-brand-600 text-white px-8 py-4 rounded-xl hover:bg-brand-700 transition shadow-xl transform hover:-translate-y-1">
                 <Icons.Smartphone size={24}/>
                 <div className="text-left">
                    <p className="text-xs uppercase opacity-80">Disponible en</p>
                    <p className="font-bold text-lg leading-none">Google Play</p>
                 </div>
               </button>
           </div>
        </div>
      </section>
    </div>
  );
};

// 2. DOWNLOAD PAGE
const DownloadPage = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white p-4">
    <div className="text-center max-w-2xl">
      <div className="inline-block p-4 bg-brand-50 rounded-full mb-6 animate-bounce">
        <Icons.Download size={48} className="text-brand-600" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Lleva YaVoy en tu bolsillo</h1>
      <p className="text-xl text-slate-600 mb-8">
        Gestiona tus tareas, recibe notificaciones al instante y chatea con tus vecinos desde nuestra app móvil.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="flex items-center justify-center space-x-3 bg-slate-900 text-white px-6 py-4 rounded-xl hover:bg-slate-800 transition shadow-lg">
           <span className="text-2xl"></span>
           <div className="text-left">
             <p className="text-xs uppercase">Consíguelo en el</p>
             <p className="font-bold text-lg leading-none">App Store</p>
           </div>
        </button>
        <button className="flex items-center justify-center space-x-3 bg-slate-900 text-white px-6 py-4 rounded-xl hover:bg-slate-800 transition shadow-lg">
           <span className="text-2xl">▶</span>
           <div className="text-left">
             <p className="text-xs uppercase">Disponible en</p>
             <p className="font-bold text-lg leading-none">Google Play</p>
           </div>
        </button>
      </div>

      <div className="mt-12 p-6 border rounded-2xl bg-gray-50 text-left">
        <h3 className="font-bold text-lg mb-2">Requisitos del sistema</h3>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>iOS 14.0 o posterior</li>
          <li>Android 8.0 o posterior</li>
          <li>Conexión a internet activa (4G/5G/WiFi)</li>
          <li>Permisos de localización activados</li>
        </ul>
      </div>
    </div>
  </div>
);

// 3. AUTH PAGES
const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (email === 'admin' && password === '1234') {
        alert("Modo Admin Demo: Accediendo sin DB (Funcionalidad limitada)");
        navigate('/admin'); 
        setLoading(false);
        return;
    }

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      // Fetch user profile to get role and redirect to correct dashboard
      if (data.user) {
        const { data: profileData, error: profileError } = await supabase
          .from('VoyUsers')
          .select('*')
          .eq('auth_user_id', data.user.id)
          .single();
        
        if (profileError) throw profileError;

        // Redirect based on user role
        if (profileData) {
          switch (profileData.role) {
            case UserRole.ADMIN:
              navigate('/admin');
              break;
            case UserRole.HELPER:
              navigate('/worker');
              break;
            case UserRole.PARTICULAR:
            case UserRole.COMPANY:
              navigate('/client');
              break;
            default:
              navigate('/');
          }
        }
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Bienvenido a YaVoy</h2>
          <p className="text-slate-500">Accede a tu cuenta</p>
        </div>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="text" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-brand-500 text-white py-3 rounded-lg font-bold hover:bg-brand-600 transition shadow-md hover:shadow-lg disabled:opacity-50">
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-500">
          ¿No tienes cuenta? <Link to="/register" className="text-brand-600 font-bold hover:underline">Regístrate gratis</Link>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const [activeTab, setActiveTab] = useState<'PARTICULAR' | 'COMPANY' | 'HELPER'>('PARTICULAR');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    cif: '',
    sector: '' as CompanySector | ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sectors, setSectors] = useState<any[]>([]);
  const [showAllSectors, setShowAllSectors] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadSectors();
  }, []);

  const loadSectors = async () => {
    try {
      const { data, error } = await supabase
        .from('VoySectors')
        .select('*')
        .order('is_primary', { ascending: false });
      
      if (error) throw error;
      setSectors(data || []);
    } catch (err) {
      console.error('Error loading sectors:', err);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (activeTab === 'COMPANY' && !formData.sector) {
      setError('Selecciona el sector principal de tu empresa');
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('VoyUsers')
          .insert([
            {
              auth_user_id: authData.user.id,
              full_name: formData.name,
              email: formData.email,
              role: activeTab,
              phone: formData.phone,
              company_sector: activeTab === 'COMPANY' ? formData.sector : null
            }
          ]);

        if (profileError) throw profileError;
        
        // If Company, also insert into VoyCompanies (skipped for brevity/mock in this step, handled by BE logic typically)
        
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Crea tu cuenta en YaVoy</h2>
          <p className="text-slate-500">Elige cómo quieres participar en la comunidad</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-3 border-b">
            <button 
              onClick={() => setActiveTab('PARTICULAR')}
              className={`p-4 text-center font-medium transition flex flex-col items-center justify-center ${activeTab === 'PARTICULAR' ? 'bg-brand-50 text-brand-600 border-b-2 border-brand-500' : 'text-slate-500 hover:bg-gray-50'}`}
            >
              <Icons.User className="mb-2" /> Particular
            </button>
            <button 
              onClick={() => setActiveTab('COMPANY')}
              className={`p-4 text-center font-medium transition flex flex-col items-center justify-center ${activeTab === 'COMPANY' ? 'bg-brand-50 text-brand-600 border-b-2 border-brand-500' : 'text-slate-500 hover:bg-gray-50'}`}
            >
              <Icons.Building className="mb-2" /> Empresa
            </button>
            <button 
              onClick={() => setActiveTab('HELPER')}
              className={`p-4 text-center font-medium transition flex flex-col items-center justify-center ${activeTab === 'HELPER' ? 'bg-brand-50 text-brand-600 border-b-2 border-brand-500' : 'text-slate-500 hover:bg-gray-50'}`}
            >
              <Icons.Briefcase className="mb-2" /> Ayudante / Trabajador
            </button>
          </div>

          <div className="p-8">
            <div className="mb-6">
              {activeTab === 'PARTICULAR' && (
                <div className="bg-blue-50 p-4 rounded-lg flex items-start text-blue-800 text-sm">
                   <Icons.Sparkles className="flex-shrink-0 mr-2 mt-1" size={16}/>
                   <p>Ideal para solicitar ayuda puntual: hacer la compra, acompañamiento, limpieza o recados rápidos.</p>
                </div>
              )}
              {activeTab === 'COMPANY' && (
                <div className="bg-blue-50 p-4 rounded-lg flex items-start text-blue-800 text-sm">
                   <Icons.Sparkles className="flex-shrink-0 mr-2 mt-1" size={16}/>
                   <p>Gestiona múltiples solicitudes, recibe facturas y encuentra personal de apoyo para picos de trabajo.</p>
                </div>
              )}
              {activeTab === 'HELPER' && (
                <div className="bg-emerald-50 p-4 rounded-lg flex items-start text-emerald-800 text-sm">
                   <Icons.Sparkles className="flex-shrink-0 mr-2 mt-1" size={16}/>
                   <p>Gana dinero realizando tareas en tu zona. Tú eliges tu horario y qué trabajos aceptar.</p>
                </div>
              )}
            </div>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

            <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo {activeTab === 'COMPANY' ? '/ Razón Social' : ''}</label>
                <input name="name" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input name="email" onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input name="phone" onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                <input name="password" onChange={handleChange} type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Contraseña</label>
                <input name="confirmPassword" onChange={handleChange} type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" required />
              </div>

              {activeTab === 'COMPANY' && (
                <>
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">CIF / NIF</label>
                    <input name="cif" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" />
                 </div>
                 
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Sector Principal de tu Empresa <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-slate-500 mb-3">
                      Elige el sector donde publicarás la mayoría de tus ofertas. Podrás publicar en otros sectores cuando lo necesites.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {sectors.filter(s => showAllSectors || s.is_primary).map(sector => (
                        <label
                          key={sector.id}
                          className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition ${
                            formData.sector === sector.id
                              ? 'border-brand-500 bg-brand-50'
                              : 'border-gray-200 hover:border-brand-300 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="sector"
                            value={sector.id}
                            checked={formData.sector === sector.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{sector.emoji}</span>
                            <div>
                              <div className="font-semibold text-sm text-slate-900">{sector.name}</div>
                              <div className="text-xs text-slate-500 mt-0.5">{sector.description.split(',')[0]}</div>
                            </div>
                          </div>
                          {formData.sector === sector.id && (
                            <Icons.CheckCircle size={20} className="absolute top-2 right-2 text-brand-600" />
                          )}
                        </label>
                      ))}
                    </div>
                    
                    {!showAllSectors && (
                      <button
                        type="button"
                        className="mt-3 text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1"
                        onClick={() => setShowAllSectors(true)}
                      >
                        <Icons.Plus size={16} />
                        Ver más sectores
                      </button>
                    )}
                 </div>
                </>
              )}

              <div className="md:col-span-2 mt-4">
                <button type="submit" disabled={loading} className="w-full bg-brand-500 text-white py-4 rounded-lg font-bold hover:bg-brand-600 transition shadow-lg disabled:opacity-50">
                  {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. DASHBOARDS

// CompanySectorCard component
const CompanySectorCard = ({ userId, companySector }: { userId: string; companySector?: string | null }) => {
  const [sector, setSector] = useState<any>(null);

  useEffect(() => {
    if (companySector) {
      loadSector();
    }
  }, [companySector]);

  const loadSector = async () => {
    try {
      const { data, error } = await supabase
        .from('VoySectors')
        .select('*')
        .eq('id', companySector)
        .single();
      
      if (error) throw error;
      setSector(data);
    } catch (err) {
      console.error('Error loading sector:', err);
    }
  };

  if (!sector) return null;

  return (
    <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">{sector.emoji || '🏢'}</span>
        <div>
          <h3 className="font-bold text-lg">Sector Principal</h3>
          <p className="text-brand-100 text-sm">{sector.name}</p>
        </div>
      </div>
      <p className="text-sm text-brand-50">{sector.description}</p>
    </div>
  );
};

// CompanySectorBanner component
const CompanySectorBanner = ({ companySector }: { companySector: string }) => {
  const [sector, setSector] = useState<any>(null);

  useEffect(() => {
    if (companySector) {
      loadSector();
    }
  }, [companySector]);

  const loadSector = async () => {
    try {
      const { data, error } = await supabase
        .from('VoySectors')
        .select('*')
        .eq('id', companySector)
        .single();
      
      if (error) throw error;
      setSector(data);
    } catch (err) {
      console.error('Error loading sector:', err);
    }
  };

  if (!sector) return <h2 className="text-xl font-bold text-slate-800">Mis Anuncios</h2>;

  return (
    <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl p-4 text-white flex items-center gap-4">
      <span className="text-3xl">{sector.emoji || '🏢'}</span>
      <div>
        <p className="text-xs text-brand-100 uppercase font-semibold">Sector Principal</p>
        <h2 className="text-xl font-bold">{sector.name}</h2>
      </div>
    </div>
  );
};

// --- CLIENT (Job Poster) ---
const ClientDashboard = ({ user, onToast }: { user: User; onToast: (toast: { message: string; type: 'success' | 'error' }) => void }) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
    const [applicants, setApplicants] = useState<Record<string, any[]>>({});
    const [editingJobId, setEditingJobId] = useState<string | null>(null);
    
    // Active view state
    const [activeView, setActiveView] = useState<'panel' | 'anuncios' | 'economia'>('anuncios');
    
    // Subscription state
    const [showSubscriptions, setShowSubscriptions] = useState(false);
    const [subscriptionPaymentModalOpen, setSubscriptionPaymentModalOpen] = useState(false);
    const [subscriptionClientSecret, setSubscriptionClientSecret] = useState<string | null>(null);
    const [subscriptionPlanInfo, setSubscriptionPlanInfo] = useState<{
      name: string;
      amount: number;
    } | null>(null);
    
    // New Job Form State
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('OTROS');
    const [isOptimizing, setIsOptimizing] = useState(false);

    // Advanced Options State
    const [jobMode, setJobMode] = useState<'ONE_OFF' | 'RECURRING' | 'CONTRACT'>('ONE_OFF');
    
    // Recurring State
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // Contract State
    const [contractType, setContractType] = useState<ContractType>(ContractType.FULL_TIME);
    const [monthlySalary, setMonthlySalary] = useState('');
    const [hasSocialSecurity, setHasSocialSecurity] = useState(false);

    useEffect(() => {
      fetchJobs();
    }, [user.id]);

    const fetchJobs = async () => {
      if (!user.id) return;
      try {
        const { data, error } = await supabase
          .from('VoyJobs')
          .select('*, schedule:VoyWorkSchedules(*), contract:VoyWorkContracts(*)')
          .eq('creator_user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setJobs(data as unknown as Job[] || []);
        
        // Load applicant counts for each job
        if (data && data.length > 0) {
          data.forEach(job => {
            fetchApplicants(job.id);
          });
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchApplicants = async (jobId: string) => {
      try {
        const { data, error } = await supabase
          .from('VoyJobApplications')
          .select('*, helper:VoyUsers(full_name, email, phone)')
          .eq('job_id', jobId)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setApplicants(prev => ({
          ...prev,
          [jobId]: data || []
        }));
      } catch (err) {
        console.error(`Error fetching applicants for job ${jobId}:`, err);
      }
    };

    const handleDeleteJob = async (jobId: string) => {
      if (!confirm('¿Estás seguro que quieres eliminar este anuncio?')) return;
      
      try {
        const { error } = await supabase
          .from('VoyJobs')
          .delete()
          .eq('id', jobId);
        
        if (error) throw error;
        setJobs(prev => prev.filter(j => j.id !== jobId));
      } catch (err) {
        alert('Error al eliminar el anuncio');
        console.error(err);
      }
    };

    const handlePurchaseSubscription = async (subscriptionType: SubscriptionType) => {
      try {
        const { createSubscription, createSubscriptionPayment, SUBSCRIPTION_PLANS } = await import('./services/subscriptionService');
        
        const subscription = await createSubscription(user.id, subscriptionType);
        const plan = SUBSCRIPTION_PLANS[subscriptionType];
        const { clientSecret } = await createSubscriptionPayment(subscription.id, plan.price, user.id);
        
        setSubscriptionClientSecret(clientSecret);
        setSubscriptionPlanInfo({ name: plan.name, amount: plan.price });
        setSubscriptionPaymentModalOpen(true);
      } catch (err) {
        console.error('Error purchasing subscription:', err);
        onToast({ message: 'Error al procesar la compra', type: 'error' });
      }
    };

    const handleSubscriptionPaymentSuccess = async () => {
      setSubscriptionPaymentModalOpen(false);
      setSubscriptionClientSecret(null);
      setSubscriptionPlanInfo(null);
      
      // Activar la última suscripción pendiente automáticamente
      try {
        const { data: pendingSubs } = await supabase
          .from('VoyCompanySubscriptions')
          .select('*')
          .eq('company_user_id', user.id)
          .eq('status', 'pending')
          .order('created_at', { ascending: false })
          .limit(1);

        if (pendingSubs && pendingSubs.length > 0) {
          const sub = pendingSubs[0];
          const durationDays = sub.subscription_type === 'annual' ? 365 : 
                               sub.subscription_type === 'semester' ? 180 : 30;
          
          const startDate = new Date();
          const endDate = new Date();
          endDate.setDate(endDate.getDate() + durationDays);

          await supabase
            .from('VoyCompanySubscriptions')
            .update({
              status: 'active',
              start_date: startDate.toISOString(),
              end_date: endDate.toISOString()
            })
            .eq('id', sub.id);
        }
      } catch (error) {
        console.error('Error activating subscription:', error);
      }

      onToast({ message: '¡Suscripción activada con éxito!', type: 'success' });
      setShowSubscriptions(false);
      
      // Recargar la página para mostrar el bono activo
      setTimeout(() => window.location.reload(), 1500);
    };

    const handleAcceptApplicant = async (applicationId: string, jobId: string, helperUserId: string) => {
      try {
        const { error } = await supabase
          .from('VoyJobApplications')
          .update({ status: 'ACCEPTED', updated_at: new Date().toISOString() })
          .eq('id', applicationId);
        
        if (error) throw error;

        // Create notification for the helper
        const job = jobs.find(j => j.id === jobId);
        await supabase
          .from('VoyNotifications')
          .insert([{
            user_id: helperUserId,
            title: '¡Candidatura Aceptada!',
            message: `Tu candidatura para "${job?.title}" ha sido aceptada. ¡Felicidades!`,
            type: 'APPLICATION_ACCEPTED',
            related_job_id: jobId,
            related_application_id: applicationId,
            is_read: false
          }]);

        await fetchApplicants(jobId);
        onToast({ message: '✓ Candidatura aceptada. Notificación enviada.', type: 'success' });
      } catch (err) {
        onToast({ message: 'Error al aceptar postulante', type: 'error' });
        console.error(err);
      }
    };

    const handleRejectApplicant = async (applicationId: string, jobId: string, helperUserId: string) => {
      try {
        const { error } = await supabase
          .from('VoyJobApplications')
          .update({ status: 'REJECTED', updated_at: new Date().toISOString() })
          .eq('id', applicationId);
        
        if (error) throw error;

        // Create notification for the helper
        const job = jobs.find(j => j.id === jobId);
        await supabase
          .from('VoyNotifications')
          .insert([{
            user_id: helperUserId,
            title: 'Candidatura No Aceptada',
            message: `Lamentablemente, tu candidatura para "${job?.title}" no ha sido aceptada. ¡Sigue intentando!`,
            type: 'APPLICATION_REJECTED',
            related_job_id: jobId,
            related_application_id: applicationId,
            is_read: false
          }]);

        await fetchApplicants(jobId);
        onToast({ message: '✓ Candidatura rechazada. Notificación enviada.', type: 'success' });
      } catch (err) {
        onToast({ message: 'Error al rechazar postulante', type: 'error' });
        console.error(err);
      }
    };

    const handleOptimize = async () => {
        if (!desc) return;
        setIsOptimizing(true);
        const improved = await optimizeJobDescription(desc);
        if(!price && jobMode === 'ONE_OFF') {
             const suggestedPrice = await suggestJobPrice(desc);
             setPrice(suggestedPrice);
        }
        setDesc(improved);
        setIsOptimizing(false);
    };

    const toggleDay = (dayId: number) => {
        if (selectedDays.includes(dayId)) {
            setSelectedDays(selectedDays.filter(d => d !== dayId));
        } else {
            setSelectedDays([...selectedDays, dayId]);
        }
    };

    const handlePostJob = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          // 1. Create Base Job
          const jobData = {
            creator_user_id: user.id,
            title,
            description: desc,
            category,
            job_type: jobMode === 'ONE_OFF' ? 'ONE_OFF' : 'HOURLY', // Simplified for DB enum
            // If contract, price_fixed might be 0, we use monthly_salary in contract table
            price_fixed: jobMode === 'ONE_OFF' ? parseFloat(price) : 0,
            price_hourly: jobMode === 'RECURRING' ? parseFloat(price) : 0, 
            status: 'OPEN',
            city: user.city || 'Madrid'
          };

          const { data: createdJob, error: jobError } = await supabase
            .from('VoyJobs')
            .insert([jobData])
            .select()
            .single();

          if (jobError) throw jobError;
          if (!createdJob) throw new Error("Failed to create job");

          // 2. Insert Extended Info based on Mode
          if (jobMode === 'RECURRING') {
               const { error: scheduleError } = await supabase
                .from('VoyWorkSchedules')
                .insert([{
                    job_id: createdJob.id,
                    period_type: PeriodType.WEEKLY,
                    day_of_week: selectedDays,
                    start_time: startTime,
                    end_time: endTime
                }]);
               if (scheduleError) throw scheduleError;
          } else if (jobMode === 'CONTRACT') {
               const { error: contractError } = await supabase
                .from('VoyWorkContracts')
                .insert([{
                    job_id: createdJob.id,
                    contract_type: contractType,
                    monthly_salary: parseFloat(monthlySalary),
                    social_security: hasSocialSecurity
                }]);
               if (contractError) throw contractError;
          }

          setIsModalOpen(false);
          // Reset Form
          setTitle(''); setDesc(''); setPrice(''); 
          setJobMode('ONE_OFF'); setSelectedDays([]); setStartTime(''); setEndTime('');
          setMonthlySalary(''); setHasSocialSecurity(false);
          
          fetchJobs(); // Refresh List
        } catch (err) {
          alert("Error publicando la tarea");
          console.error(err);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Navigation Tabs */}
            <div className="mb-8">
                <nav className="flex gap-2 border-b border-gray-200">
                    <button
                        onClick={() => setActiveView('panel')}
                        className={`px-6 py-3 font-medium transition flex items-center gap-2 border-b-2 ${
                            activeView === 'panel' 
                                ? 'border-brand-500 text-brand-600' 
                                : 'border-transparent text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <Icons.User size={18} />
                        Mi Perfil
                    </button>
                    <button
                        onClick={() => setActiveView('anuncios')}
                        className={`px-6 py-3 font-medium transition flex items-center gap-2 border-b-2 ${
                            activeView === 'anuncios' 
                                ? 'border-brand-500 text-brand-600' 
                                : 'border-transparent text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <Icons.FileText size={18} />
                        Mis Anuncios
                    </button>
                    <button
                        onClick={() => setActiveView('economia')}
                        className={`px-6 py-3 font-medium transition flex items-center gap-2 border-b-2 ${
                            activeView === 'economia' 
                                ? 'border-brand-500 text-brand-600' 
                                : 'border-transparent text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <Icons.Euro size={18} />
                        Economía
                    </button>
                </nav>
            </div>

            {/* Panel View - Profile & Settings */}
            {activeView === 'panel' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Info */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Información Personal</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        defaultValue={user.full_name}
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        defaultValue={user.email}
                                        disabled
                                        className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-slate-600 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                    <input 
                                        type="tel" 
                                        defaultValue={user.phone || ''}
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad</label>
                                    <input 
                                        type="text" 
                                        defaultValue={user.city || ''}
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>
                                <button className="bg-brand-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-600 transition">
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>

                        {/* Change Password */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Cambiar Contraseña</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
                                    <input 
                                        type="password" 
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Contraseña</label>
                                    <input 
                                        type="password" 
                                        className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition">
                                    Actualizar Contraseña
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Activity */}
                    <div className="space-y-6">
                        {/* Sector Info for Companies */}
                        <CompanySectorCard userId={user.id} companySector={user.company_sector} />
                        
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Actividad Reciente</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                                    <div>
                                        <p className="text-slate-700">Cuenta creada</p>
                                        <p className="text-xs text-slate-400">{new Date(user.created_at).toLocaleDateString('es-ES')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-50 rounded-xl border border-brand-100 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-brand-500 rounded-full p-2">
                                    <Icons.Shield size={20} className="text-white" />
                                </div>
                                <h3 className="font-semibold text-brand-900">Cuenta {user.role}</h3>
                            </div>
                            <p className="text-sm text-brand-700">
                                {user.role === 'COMPANY' && 'Acceso completo a publicación de ofertas y gestión de bonos'}
                                {user.role === 'PARTICULAR' && 'Publica tareas y encuentra ayuda cerca de ti'}
                                {user.role === UserRole.HELPER && 'Encuentra trabajos en tu zona'}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Anuncios View - Existing Jobs List */}
            {activeView === 'anuncios' && (
                <div>
                    <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-800">Mis Anuncios</h1>
                <div className="flex gap-3">
                    {user.role === 'COMPANY' && (
                        <button
                            onClick={() => setShowSubscriptions(true)}
                            className="bg-purple-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-purple-700 flex items-center"
                        >
                            <Icons.Gift size={18} className="mr-2" />
                            Bonos
                        </button>
                    )}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-brand-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-brand-600 flex items-center"
                    >
                        <Icons.Sparkles size={18} className="mr-2" />
                        Publicar Nuevo
                    </button>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Jobs List (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    {user.role === 'COMPANY' && user.company_sector ? (
                        <CompanySectorBanner companySector={user.company_sector} />
                    ) : (
                        <h2 className="text-xl font-bold text-slate-800">Mis Anuncios</h2>
                    )}
                    
                    {/* Stats Summary */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <span className="text-gray-500 text-xs uppercase font-bold">Activos</span>
                            <p className="text-2xl font-bold text-brand-600">{jobs.filter(j => j.status === 'OPEN').length}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <span className="text-gray-500 text-xs uppercase font-bold">Completados</span>
                            <p className="text-2xl font-bold text-emerald-600">{jobs.filter(j => j.status === 'COMPLETED').length}</p>
                        </div>
                    </div>

                    {/* Jobs List */}
                    {loading ? (
                      <div className="text-center py-12">Cargando...</div>
                    ) : (
                      <div className="space-y-4">{jobs.map(job => (
                      <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                          <div className="p-6">
                              <div className="flex flex-col md:flex-row justify-between items-start">
                                  <div className="flex-grow">
                                      <div className="flex items-center space-x-2 mb-1">
                                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium uppercase">{job.category}</span>
                                          <span className="text-xs text-gray-400">{new Date(job.created_at).toLocaleDateString()}</span>
                                          {job.contract && job.contract.length > 0 && <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold">CONTRATO</span>}
                                          {job.schedule && job.schedule.length > 0 && <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">RECURRENTE</span>}
                                      </div>
                                      <h3 className="font-bold text-lg text-slate-900">{job.title}</h3>
                                      <p className="text-slate-600 text-sm mt-1 max-w-2xl">{job.description}</p>
                                      
                                      {/* Extended Info Preview */}
                                      {job.contract && job.contract[0] && (
                                          <div className="mt-2 text-xs text-purple-600 font-medium flex items-center">
                                             <Icons.Briefcase size={12} className="mr-1"/> Salario: {job.contract[0].monthly_salary}€/mes
                                          </div>
                                      )}
                                  </div>

                                  <div className="mt-4 md:mt-0 flex flex-col items-end min-w-[180px]">
                                      <div className="text-right mb-4">
                                          {job.contract && job.contract[0] ? (
                                               <span className="text-xl font-bold text-slate-800">{job.contract[0].monthly_salary}€ <span className="text-xs font-normal text-slate-500">/mes</span></span>
                                          ) : (
                                               <span className="text-xl font-bold text-slate-800">{job.price_fixed || job.price_hourly}€</span>
                                          )}
                                          
                                          <span className={`block px-3 py-1 rounded-full text-xs font-bold mt-2 ${job.status === 'OPEN' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}`}>
                                              {job.status === 'OPEN' ? 'Buscando...' : job.status}
                                          </span>
                                      </div>

                                      {/* Candidatos Counter */}
                                      <button
                                          onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                                          className="flex items-center space-x-2 mb-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                      >
                                          <Icons.Users size={18} />
                                          <span className="font-bold text-sm">{applicants[job.id]?.length || 0} candidatos</span>
                                      </button>
                                  </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                                  <button
                                      onClick={() => {
                                          setEditingJobId(job.id);
                                          setIsModalOpen(true);
                                      }}
                                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition text-sm"
                                  >
                                      <Icons.Edit3 size={16} />
                                      Editar
                                  </button>
                                  <button
                                      onClick={() => handleDeleteJob(job.id)}
                                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition text-sm"
                                  >
                                      <Icons.Trash size={16} />
                                      Eliminar
                                  </button>
                              </div>

                              {/* Expandable Applicants List */}
                              {expandedJobId === job.id && (
                                  <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 rounded-lg p-4">
                                      <h4 className="font-bold text-sm text-slate-800 mb-3">Candidatos:</h4>
                                      {applicants[job.id] && applicants[job.id].length > 0 ? (
                                          <div className="space-y-3 max-h-96 overflow-y-auto">
                                              {applicants[job.id].map((app: any) => (
                                                  <div key={app.id} className="bg-white p-3 rounded-lg border border-gray-200">
                                                      <div className="flex justify-between items-start mb-2">
                                                          <div className="flex-grow">
                                                              <p className="font-medium text-sm text-slate-900">{app.helper?.full_name || 'Usuario'}</p>
                                                              <p className="text-xs text-gray-500">{app.helper?.email || 'N/A'}</p>
                                                              {app.helper?.phone && <p className="text-xs text-gray-500">{app.helper.phone}</p>}
                                                          </div>
                                                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                            app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                                                            app.status === 'ACCEPTED' ? 'bg-emerald-100 text-emerald-700' :
                                                            'bg-red-100 text-red-700'
                                                          }`}>
                                                              {app.status === 'PENDING' ? 'Pendiente' : app.status === 'ACCEPTED' ? 'Aceptado' : 'Rechazado'}
                                                          </span>
                                                      </div>
                                                      
                                                      {app.message && (
                                                          <div className="bg-blue-50 p-2 rounded mb-2 text-xs">
                                                              <p className="text-gray-700"><span className="font-medium">Mensaje:</span> {app.message}</p>
                                                          </div>
                                                      )}
                                                      
                                                      {(app.proposed_price || app.proposed_hourly_rate) && (
                                                          <div className="text-xs text-gray-600 mb-2">
                                                              {app.proposed_price && <p><span className="font-medium">Precio propuesto:</span> {app.proposed_price}€</p>}
                                                              {app.proposed_hourly_rate && <p><span className="font-medium">Tarifa propuesta:</span> {app.proposed_hourly_rate}€/h</p>}
                                                          </div>
                                                      )}
                                                      
                                                      <p className="text-xs text-gray-400">{new Date(app.created_at).toLocaleDateString()}</p>
                                                      
                                                      {app.status === 'PENDING' && (
                                                          <div className="flex gap-2 mt-2">
                                                              <button 
                                                                  onClick={() => handleAcceptApplicant(app.id, job.id, app.helper_user_id)}
                                                                  className="flex-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium hover:bg-emerald-200 transition"
                                                              >
                                                                  Aceptar
                                                              </button>
                                                              <button 
                                                                  onClick={() => handleRejectApplicant(app.id, job.id, app.helper_user_id)}
                                                                  className="flex-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200 transition"
                                                              >
                                                                  Rechazar
                                                              </button>
                                                          </div>
                                                      )}
                                                  </div>
                                              ))}
                                          </div>
                                      ) : (
                                          <p className="text-sm text-gray-500 italic">No hay candidatos aún.</p>
                                      )}
                                  </div>
                              )}
                          </div>
                      </div>
                  ))}
                  {jobs.length === 0 && (
                      <div className="text-center py-12 text-gray-400 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                          No tienes anuncios activos. ¡Publica uno!
                      </div>
                  )}
              </div>
            )}
                </div>

                {/* Right Column - Financial Panel (1/3) */}
                {(user.role === 'COMPANY' || user.role === 'PARTICULAR') && (
                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
                            <FinancialPanel userId={user.id} userRole={user.role as 'COMPANY' | 'PARTICULAR'} />
                        </div>
                    </div>
                )}
            </div>

            {/* Advanced Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-2xl animate-fade-in-up my-8">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h2 className="text-2xl font-bold text-slate-800">Publicar Oferta</h2>
                            <button onClick={() => setIsModalOpen(false)}><Icons.X className="text-gray-400 hover:text-gray-600" /></button>
                        </div>
                        
                        <form onSubmit={handlePostJob} className="space-y-6">
                            {/* Step 1: Basic Info */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">1. Información General</h3>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                                    <input required value={title} onChange={e => setTitle(e.target.value)} type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 bg-white text-slate-900 outline-none" placeholder="Ej: Ayuda con la compra" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
                                    <div className="relative">
                                        <textarea required value={desc} onChange={e => setDesc(e.target.value)} rows={3} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 bg-white text-slate-900 outline-none resize-none" placeholder="Describe qué necesitas..." />
                                        <button 
                                            type="button" 
                                            onClick={handleOptimize}
                                            disabled={isOptimizing || desc.length < 5}
                                            className="absolute right-2 bottom-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 flex items-center transition disabled:opacity-50"
                                        >
                                            <Icons.Sparkles size={12} className="mr-1" />
                                            {isOptimizing ? 'Mejorando...' : 'Mejorar con AI'}
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Categoría</label>
                                        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none">
                                            <option value="">Selecciona una categoría</option>
                                            <optgroup label="Categorías Principales">
                                                <option value="MAYORES">👴 Mayores y Dependencia</option>
                                                <option value="HOGAR">🏠 Hogar y Mantenimiento</option>
                                                <option value="MASCOTAS">🐾 Mascotas</option>
                                                <option value="RECADOS">🛒 Compras y Recados</option>
                                                <option value="DIGITAL">💻 Tecnología Digital</option>
                                            </optgroup>
                                            <optgroup label="Otras Categorías">
                                                <option value="HOSTELERIA">🍽️ Hostelería y Eventos</option>
                                                <option value="TRANSPORTE">🚗 Transporte y Reparto</option>
                                                <option value="EDUCACION">📚 Educación y Formación</option>
                                                <option value="COMERCIO">🏪 Comercio y Negocios</option>
                                                <option value="SALUD">💊 Salud y Bienestar</option>
                                                <option value="CREATIVIDAD">🎨 Creatividad y Arte</option>
                                                <option value="ADMINISTRACION">📋 Administración y Oficina</option>
                                                <option value="CONSTRUCCION">🔨 Construcción y Oficios</option>
                                                <option value="AGRICULTURA">🌾 Agricultura y Campo</option>
                                                <option value="TURISMO">✈️ Turismo y Alojamiento</option>
                                                <option value="SEGURIDAD">🛡️ Seguridad y Control</option>
                                                <option value="MARKETING">📢 Marketing de Calle</option>
                                                <option value="TECNODOMESTICA">🔌 Tecnología Doméstica</option>
                                                <option value="MODA">👗 Moda y Textil</option>
                                                <option value="OTROS">📦 Otros Servicios</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100"/>

                            {/* Step 2: Job Type */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">2. Tipo de Trabajo</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    <button type="button" onClick={() => setJobMode('ONE_OFF')} className={`p-3 rounded-lg border-2 text-sm font-bold transition ${jobMode === 'ONE_OFF' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                                        Puntual
                                    </button>
                                    <button type="button" onClick={() => setJobMode('RECURRING')} className={`p-3 rounded-lg border-2 text-sm font-bold transition ${jobMode === 'RECURRING' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                                        Recurrente
                                    </button>
                                    <button type="button" onClick={() => setJobMode('CONTRACT')} className={`p-3 rounded-lg border-2 text-sm font-bold transition ${jobMode === 'CONTRACT' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                                        Con Contrato
                                    </button>
                                </div>
                            </div>

                            {/* Conditional Fields based on Job Mode */}
                            
                            {/* ONE OFF */}
                            {jobMode === 'ONE_OFF' && (
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Precio Total (€)</label>
                                    <input required value={price} onChange={e => setPrice(e.target.value)} type="number" className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none" placeholder="20" />
                                </div>
                            )}

                            {/* RECURRING */}
                            {jobMode === 'RECURRING' && (
                                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Días de la semana</label>
                                        <div className="flex gap-2 flex-wrap">
                                            {DAYS_OF_WEEK.map(day => (
                                                <button 
                                                    key={day.id} 
                                                    type="button" 
                                                    onClick={() => toggleDay(day.id)}
                                                    className={`w-10 h-10 rounded-full font-bold text-sm transition ${selectedDays.includes(day.id) ? 'bg-brand-600 text-white shadow-md' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
                                                >
                                                    {day.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Hora Inicio</label>
                                            <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Hora Fin</label>
                                            <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Precio por Hora (€/h)</label>
                                        <input required value={price} onChange={e => setPrice(e.target.value)} type="number" className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none" placeholder="12" />
                                    </div>
                                </div>
                            )}

                            {/* CONTRACT */}
                            {jobMode === 'CONTRACT' && (
                                <div className="bg-purple-50 p-4 rounded-lg space-y-4 border border-purple-100">
                                    <div className="flex items-center space-x-2 text-purple-800 text-sm font-bold mb-2">
                                        <Icons.Shield size={16}/> <span>Oferta Laboral Formal</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Salario Mensual (€)</label>
                                            <input required value={monthlySalary} onChange={e => setMonthlySalary(e.target.value)} type="number" className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none" placeholder="1200" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo Contrato</label>
                                            <select value={contractType} onChange={e => setContractType(e.target.value as ContractType)} className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none">
                                                <option value={ContractType.FULL_TIME}>Jornada Completa</option>
                                                <option value={ContractType.PART_TIME}>Media Jornada</option>
                                                <option value={ContractType.TEMPORARY}>Temporal</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <input 
                                            id="ss" 
                                            type="checkbox" 
                                            checked={hasSocialSecurity} 
                                            onChange={e => setHasSocialSecurity(e.target.checked)}
                                            className="w-5 h-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500" 
                                        />
                                        <label htmlFor="ss" className="ml-2 block text-sm text-slate-700">Alta en Seguridad Social incluida</label>
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-brand-500 text-white py-4 rounded-xl font-bold hover:bg-brand-600 shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                                Publicar Oferta
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Subscription Panel Modal */}
            {showSubscriptions && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white rounded-lg max-w-4xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto relative">
                        <button
                            onClick={() => setShowSubscriptions(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <SubscriptionPanel userId={user.id} onPurchase={handlePurchaseSubscription} />
                    </div>
                </div>
            )}

            {/* Subscription Payment Modal */}
            {subscriptionPaymentModalOpen && subscriptionClientSecret && subscriptionPlanInfo && (
                <SubscriptionPaymentModal
                    isOpen={subscriptionPaymentModalOpen}
                    onClose={() => setSubscriptionPaymentModalOpen(false)}
                    onSuccess={handleSubscriptionPaymentSuccess}
                    clientSecret={subscriptionClientSecret}
                    planName={subscriptionPlanInfo.name}
                    amount={subscriptionPlanInfo.amount}
                />
            )}
                </div>
            )}

            {/* Economía View - Financial Dashboard */}
            {activeView === 'economia' && (
                <div className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <Icons.Briefcase size={24} className="opacity-80" />
                                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">Total</div>
                            </div>
                            <div className="text-3xl font-bold mb-1">{jobs.length}</div>
                            <div className="text-sm opacity-90">Anuncios Publicados</div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <Icons.Euro size={24} className="opacity-80" />
                                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">Mes</div>
                            </div>
                            <div className="text-3xl font-bold mb-1">
                                {jobs.filter(j => j.status === 'COMPLETED').length * 15}€
                            </div>
                            <div className="text-sm opacity-90">Ingresos Estimados</div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <Icons.Users size={24} className="opacity-80" />
                                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">Total</div>
                            </div>
                            <div className="text-3xl font-bold mb-1">
                                {jobs.reduce((sum, j) => sum + (j.applicant_count || 0), 0)}
                            </div>
                            <div className="text-sm opacity-90">Candidaturas Recibidas</div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <Icons.CheckCircle size={24} className="opacity-80" />
                                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">Activas</div>
                            </div>
                            <div className="text-3xl font-bold mb-1">
                                {jobs.filter(j => j.status === 'OPEN').length}
                            </div>
                            <div className="text-sm opacity-90">Ofertas Activas</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Detailed Transactions */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Financial Panel Component */}
                            <FinancialPanel userId={user.id} userRole={user.role as 'COMPANY' | 'PARTICULAR'} />

                            {/* Recent Jobs Activity */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">Actividad de Anuncios</h2>
                                <div className="space-y-4">
                                    {jobs.slice(0, 5).map(job => (
                                        <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-slate-900">{job.title}</h3>
                                                <p className="text-sm text-slate-500">
                                                    {job.job_type === 'ONE_OFF' && `${job.price}€ precio fijo`}
                                                    {job.job_type === 'HOURLY' && `${job.hourly_rate}€/h`}
                                                    {job.job_type === 'CONTRACT' && `Contrato indefinido`}
                                                </p>
                                            </div>
                                            <div className="text-right ml-4">
                                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                                    job.status === 'ACTIVE' ? 'bg-green-100 text-green-700' :
                                                    job.status === 'COMPLETED' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                                }`}>
                                                    {job.status === 'ACTIVE' && 'Activa'}
                                                    {job.status === 'COMPLETED' && 'Completada'}
                                                    {job.status === 'CANCELLED' && 'Cancelada'}
                                                </div>
                                                {job.applicant_count ? (
                                                    <p className="text-xs text-slate-500 mt-1">
                                                        {job.applicant_count} candidaturas
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                    ))}
                                    {jobs.length === 0 && (
                                        <div className="text-center py-8 text-slate-400">
                                            <Icons.FileText size={48} className="mx-auto mb-3 opacity-50" />
                                            <p>No hay anuncios todavía</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Quick Stats & Charts */}
                        <div className="space-y-6">
                            {/* Jobs by Category */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-semibold text-slate-900 mb-4">Anuncios por Categoría</h3>
                                <div className="space-y-3">
                                    {['OTROS', 'MAYORES', 'HOGAR', 'MASCOTAS', 'RECADOS', 'DIGITAL'].map(cat => {
                                        const count = jobs.filter(j => j.category === cat).length;
                                        const percentage = jobs.length > 0 ? (count / jobs.length) * 100 : 0;
                                        return (
                                            <div key={cat}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-slate-600 capitalize">{cat.toLowerCase()}</span>
                                                    <span className="font-bold text-slate-900">{count}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className="bg-brand-500 h-2 rounded-full transition-all"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Jobs by Status */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-semibold text-slate-900 mb-4">Estado de Anuncios</h3>
                                <div className="space-y-3">
                                    {['ACTIVE', 'COMPLETED', 'CANCELLED'].map(status => {
                                        const count = jobs.filter(j => j.status === status).length;
                                        return (
                                            <div key={status} className="flex justify-between items-center">
                                                <span className="text-sm text-slate-600">
                                                    {status === 'ACTIVE' && 'Activas'}
                                                    {status === 'COMPLETED' && 'Completadas'}
                                                    {status === 'CANCELLED' && 'Canceladas'}
                                                </span>
                                                <span className={`text-2xl font-bold ${
                                                    status === 'ACTIVE' ? 'text-green-600' :
                                                    status === 'COMPLETED' ? 'text-blue-600' :
                                                    'text-gray-600'
                                                }`}>
                                                    {count}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white">
                                <h3 className="font-semibold mb-3">Acciones Rápidas</h3>
                                <div className="space-y-2">
                                    <button 
                                        onClick={() => setActiveView('anuncios')}
                                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium transition flex items-center justify-center gap-2"
                                    >
                                        <Icons.Plus size={16} />
                                        Publicar Anuncio
                                    </button>
                                    {user.role === 'COMPANY' && (
                                        <button 
                                            onClick={() => setShowSubscriptions(true)}
                                            className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium transition flex items-center justify-center gap-2"
                                        >
                                            <Icons.Gift size={16} />
                                            Ver Bonos
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- WORKER ---
const WorkerDashboard = ({ user }: { user: User }) => {
    const [availableJobs, setAvailableJobs] = useState<Job[]>([]);
    const [myApplications, setMyApplications] = useState<any[]>([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'available' | 'my-applications' | 'economics'>('available');
    const [applyFormData, setApplyFormData] = useState({
      message: '',
      proposedPrice: '',
      proposedHourlyRate: ''
    });
    const [economicStats, setEconomicStats] = useState({
      totalHired: 0,
      totalEarned: 0,
      pendingEarnings: 0,
      activeOpportunities: 0
    });

    useEffect(() => {
      fetchJobs();
      fetchAppliedJobs();
      fetchMyApplications();
      fetchEconomicStats();
    }, [user.id]);

    const fetchJobs = async () => {
      try {
        // Primero obtenemos los IDs de trabajos que ya tienen candidaturas aceptadas
        const { data: acceptedApplications, error: acceptedError } = await supabase
          .from('VoyJobApplications')
          .select('job_id')
          .eq('status', 'ACCEPTED');

        if (acceptedError) throw acceptedError;

        const acceptedJobIds = (acceptedApplications || []).map(app => app.job_id);

        // Luego obtenemos todos los trabajos OPEN
        const { data, error } = await supabase
          .from('VoyJobs')
          .select('*, creator:VoyUsers(full_name), schedule:VoyWorkSchedules(*), contract:VoyWorkContracts(*)')
          .eq('status', 'OPEN')
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Filtramos los trabajos para excluir los que ya tienen candidaturas aceptadas
        const availableJobsFiltered = (data || []).filter(job => !acceptedJobIds.includes(job.id));
        
        setAvailableJobs(availableJobsFiltered as unknown as Job[] || []);
      } catch (err) {
        console.error("Error fetching jobs", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchAppliedJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('VoyJobApplications')
          .select('job_id')
          .eq('helper_user_id', user.id);
        
        if (error) throw error;
        setAppliedJobs((data || []).map(app => app.job_id));
      } catch (err) {
        console.error("Error fetching applied jobs", err);
      }
    };

    const fetchMyApplications = async () => {
      try {
        const { data, error } = await supabase
          .from('VoyJobApplications')
          .select('*, job:VoyJobs(id, title, description, price_fixed, price_hourly, creator:VoyUsers(full_name))')
          .eq('helper_user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setMyApplications(data || []);
      } catch (err) {
        console.error("Error fetching my applications", err);
      }
    };

    const fetchEconomicStats = async () => {
      try {
        // Obtener aplicaciones aceptadas (contrataciones)
        const { data: acceptedApps, error: acceptedError } = await supabase
          .from('VoyJobApplications')
          .select('*, job:VoyJobs(price_fixed, price_hourly, job_type)')
          .eq('helper_user_id', user.id)
          .eq('status', 'ACCEPTED');
        
        if (acceptedError) throw acceptedError;

        // Calcular ingresos obtenidos (trabajos aceptados)
        const totalEarned = (acceptedApps || []).reduce((sum, app) => {
          if (app.job?.job_type === 'ONE_OFF' && app.job.price_fixed) {
            return sum + app.job.price_fixed;
          }
          if (app.job?.job_type === 'HOURLY' && app.job.price_hourly) {
            // Estimación: 20 horas por trabajo por hora
            return sum + (app.job.price_hourly * 20);
          }
          return sum;
        }, 0);

        // Obtener aplicaciones pendientes
        const { data: pendingApps, error: pendingError } = await supabase
          .from('VoyJobApplications')
          .select('*, job:VoyJobs(price_fixed, price_hourly, job_type)')
          .eq('helper_user_id', user.id)
          .eq('status', 'PENDING');
        
        if (pendingError) throw pendingError;

        // Calcular posibles ingresos de candidaturas pendientes
        const pendingEarnings = (pendingApps || []).reduce((sum, app) => {
          if (app.job?.job_type === 'ONE_OFF' && app.job.price_fixed) {
            return sum + app.job.price_fixed;
          }
          if (app.job?.job_type === 'HOURLY' && app.job.price_hourly) {
            return sum + (app.job.price_hourly * 20);
          }
          return sum;
        }, 0);

        // Calcular oportunidades activas disponibles
        const { data: activeJobs, error: activeError } = await supabase
          .from('VoyJobs')
          .select('price_fixed, price_hourly, job_type')
          .eq('status', 'OPEN');
        
        if (activeError) throw activeError;

        const activeOpportunities = (activeJobs || []).reduce((sum, job) => {
          if (job.job_type === 'ONE_OFF' && job.price_fixed) {
            return sum + job.price_fixed;
          }
          if (job.job_type === 'HOURLY' && job.price_hourly) {
            return sum + (job.price_hourly * 20);
          }
          return sum;
        }, 0);

        setEconomicStats({
          totalHired: acceptedApps?.length || 0,
          totalEarned: Math.round(totalEarned),
          pendingEarnings: Math.round(pendingEarnings),
          activeOpportunities: Math.round(activeOpportunities)
        });

      } catch (err) {
        console.error("Error fetching economic stats", err);
      }
    };

    const handleAccept = (job: Job) => {
      if (appliedJobs.includes(job.id)) {
        alert('Ya has enviado tu candidatura a este trabajo.');
        return;
      }
      setSelectedJob(job);
      setApplyFormData({ message: '', proposedPrice: '', proposedHourlyRate: '' });
      setIsApplyModalOpen(true);
    };

    const handleSubmitApplication = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedJob) return;

      try {
        const applicationData: any = {
          job_id: selectedJob.id,
          helper_user_id: user.id,
          status: 'PENDING',
          message: applyFormData.message || null
        };

        // Add proposed prices if provided
        if (selectedJob.job_type === 'ONE_OFF' && applyFormData.proposedPrice) {
          applicationData.proposed_price = parseFloat(applyFormData.proposedPrice);
        }
        if (selectedJob.job_type === 'HOURLY' && applyFormData.proposedHourlyRate) {
          applicationData.proposed_hourly_rate = parseFloat(applyFormData.proposedHourlyRate);
        }

        const { error } = await supabase
          .from('VoyJobApplications')
          .insert([applicationData]);

        if (error) throw error;
        setAppliedJobs([...appliedJobs, selectedJob.id]);
        setIsApplyModalOpen(false);
        await fetchMyApplications();
        alert('¡Has enviado tu candidatura exitosamente!');
      } catch (err) {
        console.error('Error applying for job:', err);
        alert('Error al enviar tu candidatura. Por favor, intenta de nuevo.');
      }
    };

    const filtered = filter === 'all' ? availableJobs : availableJobs.filter(j => j.category === filter);

    const getDayLabel = (dayIndex: number) => DAYS_OF_WEEK.find(d => d.id === dayIndex)?.label || '?';

    const getStatusBadge = (status: string) => {
      switch(status) {
        case 'PENDING':
          return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">Pendiente</span>;
        case 'ACCEPTED':
          return <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">Aceptada</span>;
        case 'REJECTED':
          return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">Rechazada</span>;
        default:
          return null;
      }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Mi Panel de Trabajos</h1>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('available')}
                className={`px-4 py-3 font-medium transition border-b-2 ${
                  activeTab === 'available' 
                    ? 'border-brand-500 text-brand-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                Trabajos Disponibles
              </button>
              <button 
                onClick={() => setActiveTab('my-applications')}
                className={`px-4 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
                  activeTab === 'my-applications' 
                    ? 'border-brand-500 text-brand-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                Mis Candidaturas
                {myApplications.length > 0 && (
                  <span className="bg-brand-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {myApplications.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setActiveTab('economics')}
                className={`px-4 py-3 font-medium transition border-b-2 flex items-center gap-2 ${
                  activeTab === 'economics' 
                    ? 'border-brand-500 text-brand-600' 
                    : 'border-transparent text-slate-600 hover:text-slate-800'
                }`}
              >
                <Icons.DollarSign size={18} />
                Datos Económicos
              </button>
            </div>

            {/* Available Jobs Tab */}
            {activeTab === 'available' && (
              <>
                <div className="flex flex-wrap gap-2 pb-4 mb-4">
                  {/* Categorías principales */}
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-gray-50'}`}
                  >
                    Todos
                  </button>
                  {['MAYORES', 'HOGAR', 'MASCOTAS', 'RECADOS', 'DIGITAL'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${filter === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-gray-50'}`}
                    >
                      {cat}
                    </button>
                  ))}
                  
                  {/* Desplegable con más categorías */}
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white text-slate-600 hover:bg-gray-50 transition outline-none cursor-pointer"
                  >
                    <option value="">Más categorías...</option>
                    <option value="HOSTELERIA">Hostelería y Eventos</option>
                    <option value="TRANSPORTE">Transporte y Reparto</option>
                    <option value="EDUCACION">Educación y Formación</option>
                    <option value="COMERCIO">Comercio y Negocios</option>
                    <option value="SALUD">Salud y Bienestar</option>
                    <option value="CREATIVIDAD">Creatividad y Arte</option>
                    <option value="ADMINISTRACION">Administración</option>
                    <option value="CONSTRUCCION">Construcción y Oficios</option>
                    <option value="AGRICULTURA">Agricultura</option>
                    <option value="TURISMO">Turismo y Alojamiento</option>
                    <option value="SEGURIDAD">Seguridad</option>
                    <option value="MARKETING">Marketing</option>
                    <option value="MODA">Moda y Textil</option>
                    <option value="OTROS">Otros Servicios</option>
                  </select>
                </div>

                {loading ? (
                  <div className="text-center">Cargando ofertas...</div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filtered.map(job => (
                          <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col h-full relative group">
                              {/* Badges */}
                              <div className="absolute top-4 right-4 flex flex-col items-end space-y-1">
                                  {job.contract && job.contract.length > 0 && (
                                      <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">CONTRATO</span>
                                  )}
                                  {job.schedule && job.schedule.length > 0 && (
                                      <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">RECURRENTE</span>
                                  )}
                              </div>

                              <div className="p-6 flex-grow">
                                  <div className="flex justify-between items-start mb-4 pr-16">
                                      <div className="flex items-center space-x-2">
                                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                                              {(job.creator?.full_name || 'U').charAt(0)}
                                          </div>
                                          <span className="text-sm font-medium text-gray-700 truncate max-w-[100px]">{job.creator?.full_name || 'Usuario'}</span>
                                      </div>
                                  </div>
                                  
                                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{job.description}</p>
                                  
                                  {/* Price Display */}
                                  <div className="mb-4">
                                      {job.contract && job.contract[0] ? (
                                          <div className="flex items-baseline">
                                              <span className="text-2xl font-bold text-slate-900">{job.contract[0].monthly_salary}€</span>
                                              <span className="text-sm text-slate-500 ml-1">/ mes</span>
                                          </div>
                                      ) : (
                                          <div className="flex items-baseline">
                                              <span className="text-2xl font-bold text-slate-900">{job.price_fixed || job.price_hourly}€</span>
                                              {job.price_hourly && job.price_hourly > 0 && <span className="text-sm text-slate-500 ml-1">/ hora</span>}
                                          </div>
                                      )}
                                  </div>

                                  {/* Details: Location, Schedule, SS */}
                                  <div className="space-y-2 text-xs text-gray-500">
                                      <div className="flex items-center">
                                          <Icons.MapPin size={12} className="mr-2 text-gray-400" /> 
                                          {job.city || 'Madrid'}
                                      </div>
                                      
                                      {job.schedule && job.schedule[0] && (
                                          <div className="flex items-start">
                                              <Icons.Clock size={12} className="mr-2 mt-0.5 text-gray-400" />
                                              <div>
                                                  <div className="flex gap-1 mb-1">
                                                      {job.schedule[0].day_of_week?.map(d => (
                                                          <span key={d} className="bg-gray-100 px-1 rounded text-[10px] font-bold text-slate-600">{getDayLabel(d)}</span>
                                                      ))}
                                                  </div>
                                                  {job.schedule[0].start_time && (
                                                      <span>{job.schedule[0].start_time.slice(0,5)} - {job.schedule[0].end_time?.slice(0,5)}</span>
                                                  )}
                                              </div>
                                          </div>
                                      )}

                                      {job.contract && job.contract[0]?.social_security && (
                                          <div className="flex items-center text-emerald-600 font-medium">
                                              <Icons.CheckCircle size={12} className="mr-2" /> Seguridad Social Incluida
                                          </div>
                                      )}
                                  </div>
                              </div>
                              
                              <div className="bg-gray-50 p-4 border-t border-gray-100">
                                  <button 
                                      onClick={() => handleAccept(job)}
                                      disabled={appliedJobs.includes(job.id)}
                                      className={`w-full py-2 rounded-lg font-bold text-sm transition ${
                                        appliedJobs.includes(job.id)
                                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                          : 'bg-slate-900 text-white hover:bg-brand-600'
                                      }`}
                                  >
                                      {appliedJobs.includes(job.id) ? '✓ Ya has candidado' : 'Ver Detalles y Candidar'}
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
                )}
                {!loading && filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        No hay trabajos disponibles en esta categoría por el momento.
                    </div>
                )}
              </>
            )}

            {/* My Applications Tab */}
            {activeTab === 'my-applications' && (
              <div>
                {myApplications.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <Icons.FileText size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No has enviado ninguna candidatura aún</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {myApplications.map(app => {
                      // Determinar color de la cabecera según el estado
                      const getHeaderColor = () => {
                        if (app.status === 'ACCEPTED') return 'bg-emerald-500';
                        if (app.status === 'REJECTED') return 'bg-gray-400';
                        return 'bg-orange-500'; // PENDING
                      };

                      return (
                        <div key={app.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition overflow-hidden">
                          {/* Cabecera con color según estado */}
                          <div className={`${getHeaderColor()} px-4 py-3 text-white`}>
                            <h3 className="font-bold text-sm line-clamp-1">{app.job?.title}</h3>
                          </div>

                          {/* Contenido del card */}
                          <div className="p-4">
                            {/* Creador y estado */}
                            <div className="flex justify-between items-center mb-3">
                              <div className="text-xs text-gray-600 flex items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-[10px] font-bold">
                                  {(app.job?.creator?.full_name || 'U').charAt(0)}
                                </div>
                                <span className="truncate max-w-[120px]">{app.job?.creator?.full_name || 'Usuario'}</span>
                              </div>
                              {getStatusBadge(app.status)}
                            </div>

                            {/* Application Details */}
                            <div className="space-y-2 text-xs text-gray-600 mb-3">
                              {app.message && (
                                <div>
                                  <p className="font-medium text-gray-700 mb-0.5">Tu mensaje:</p>
                                  <p className="text-gray-600 italic line-clamp-2">"{app.message}"</p>
                                </div>
                              )}
                              {app.proposed_price && (
                                <p><span className="font-medium text-gray-700">Precio:</span> {app.proposed_price}€</p>
                              )}
                              {app.proposed_hourly_rate && (
                                <p><span className="font-medium text-gray-700">Tarifa:</span> {app.proposed_hourly_rate}€/h</p>
                              )}
                            </div>

                            {/* Job Details Preview */}
                            {app.job && (
                              <div className="bg-gray-50 p-2 rounded-lg text-[10px] text-gray-600 mb-3">
                                <div className="space-y-1">
                                  <div><span className="font-medium">Ubicación:</span> {app.job.city || 'Madrid'}</div>
                                  {app.job.price_fixed && <div><span className="font-medium">Presupuesto:</span> {app.job.price_fixed}€</div>}
                                  {app.job.price_hourly && <div><span className="font-medium">Tarifa:</span> {app.job.price_hourly}€/h</div>}
                                </div>
                              </div>
                            )}

                            {/* Fecha */}
                            <p className="text-gray-400 text-[10px]">
                              {new Date(app.created_at).toLocaleDateString('es-ES')}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Economics Tab */}
            {activeTab === 'economics' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Total Hired */}
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Icons.CheckCircle size={32} className="opacity-80" />
                      <span className="text-emerald-100 text-sm font-medium">Total</span>
                    </div>
                    <div className="text-4xl font-black mb-1">{economicStats.totalHired}</div>
                    <div className="text-emerald-100 text-sm">Veces Contratado</div>
                  </div>

                  {/* Total Earned */}
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Icons.DollarSign size={32} className="opacity-80" />
                      <span className="text-blue-100 text-sm font-medium">Ganado</span>
                    </div>
                    <div className="text-4xl font-black mb-1">{economicStats.totalEarned}€</div>
                    <div className="text-blue-100 text-sm">Ingresos Obtenidos</div>
                  </div>

                  {/* Pending Earnings */}
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Icons.Clock size={32} className="opacity-80" />
                      <span className="text-amber-100 text-sm font-medium">Pendiente</span>
                    </div>
                    <div className="text-4xl font-black mb-1">{economicStats.pendingEarnings}€</div>
                    <div className="text-amber-100 text-sm">Candidaturas Pendientes</div>
                  </div>

                  {/* Active Opportunities */}
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Icons.TrendingUp size={32} className="opacity-80" />
                      <span className="text-purple-100 text-sm font-medium">Disponible</span>
                    </div>
                    <div className="text-4xl font-black mb-1">{economicStats.activeOpportunities}€</div>
                    <div className="text-purple-100 text-sm">En Ofertas Activas</div>
                  </div>
                </div>

                {/* Detailed Analysis */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Icons.BarChart size={24} className="text-brand-500" />
                    Análisis Económico
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Success Rate */}
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Tasa de Éxito</span>
                        <span className="text-lg font-bold text-emerald-600">
                          {myApplications.length > 0 
                            ? Math.round((economicStats.totalHired / myApplications.length) * 100) 
                            : 0}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {economicStats.totalHired} contrataciones de {myApplications.length} candidaturas enviadas
                      </p>
                    </div>

                    {/* Average Earning per Job */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Ingreso Promedio por Trabajo</span>
                        <span className="text-lg font-bold text-blue-600">
                          {economicStats.totalHired > 0 
                            ? Math.round(economicStats.totalEarned / economicStats.totalHired) 
                            : 0}€
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Basado en {economicStats.totalHired} trabajos completados
                      </p>
                    </div>

                    {/* Potential Growth */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Potencial de Crecimiento</span>
                        <span className="text-lg font-bold text-purple-600">
                          {economicStats.pendingEarnings + economicStats.activeOpportunities}€
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Oportunidades pendientes + ofertas activas disponibles
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-xl p-6 border border-brand-200">
                  <h3 className="text-lg font-bold text-brand-900 mb-3 flex items-center gap-2">
                    <Icons.Lightbulb size={20} className="text-brand-600" />
                    Consejos para Aumentar tus Ingresos
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0" />
                      <span>Completa tu perfil al 100% para destacar entre otros candidatos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0" />
                      <span>Responde rápidamente a las ofertas - los primeros en aplicar tienen más posibilidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0" />
                      <span>Personaliza tu mensaje en cada candidatura para mostrar interés genuino</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0" />
                      <span>Mantén una buena valoración completando trabajos con calidad y puntualidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Apply Modal */}
            {isApplyModalOpen && selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl my-8">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">Enviar mi Candidatura</h2>
                                <p className="text-sm text-gray-500 mt-1">{selectedJob.title}</p>
                            </div>
                            <button onClick={() => setIsApplyModalOpen(false)}><Icons.X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24}/></button>
                        </div>

                        <form onSubmit={handleSubmitApplication} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje de presentación (opcional)</label>
                                <textarea 
                                    rows={4}
                                    value={applyFormData.message}
                                    onChange={(e) => setApplyFormData({...applyFormData, message: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                                    placeholder="Cuéntale al empleador por qué eres el candidato ideal..."
                                />
                            </div>

                            {/* Conditional Price Fields */}
                            {selectedJob.job_type === 'ONE_OFF' && (
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Precio propuesto (€) (opcional)</label>
                                    <p className="text-xs text-gray-500 mb-2">Precio sugerido: {selectedJob.price_fixed}€</p>
                                    <input 
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={applyFormData.proposedPrice}
                                        onChange={(e) => setApplyFormData({...applyFormData, proposedPrice: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                        placeholder="Puedes proponer otro precio"
                                    />
                                </div>
                            )}

                            {selectedJob.job_type === 'HOURLY' && (
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Tarifa horaria propuesta (€/h) (opcional)</label>
                                    <p className="text-xs text-gray-500 mb-2">Tarifa sugerida: {selectedJob.price_hourly}€/h</p>
                                    <input 
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={applyFormData.proposedHourlyRate}
                                        onChange={(e) => setApplyFormData({...applyFormData, proposedHourlyRate: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                                        placeholder="Puedes proponer otra tarifa"
                                    />
                                </div>
                            )}

                            <div className="flex gap-3 pt-4">
                                <button 
                                    type="button"
                                    onClick={() => setIsApplyModalOpen(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition"
                                >
                                    Enviar Candidatura
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- APP ROUTING & LOGIC ---

const ProtectedRoute = ({ children, auth, roles }: { children: React.ReactElement, auth: AuthState, roles: UserRole[] }) => {
    if (auth.loading) return <div>Cargando...</div>;
    if (auth.user?.id === 'admin-local') return children;

    if (!auth.isAuthenticated || !auth.user) {
        return <Navigate to="/login" replace />;
    }
    
    if (roles.includes(UserRole.HELPER) && auth.user.role === UserRole.HELPER) return children;
    if ((roles.includes(UserRole.PARTICULAR) || roles.includes(UserRole.COMPANY)) && (auth.user.role === UserRole.PARTICULAR || auth.user.role === UserRole.COMPANY)) return children;
    if (roles.includes(UserRole.ADMIN) && auth.user.role === UserRole.ADMIN) return children;

    return <Navigate to="/" replace />;
};

export const App: React.FC = () => {
    const [auth, setAuth] = useState<AuthState>(INITIAL_AUTH);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [showDashboard, setShowDashboard] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                fetchProfile(session.user.id, session.user.email!);
            } else {
                setAuth({ isAuthenticated: false, user: null, loading: false });
            }
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                fetchProfile(session.user.id, session.user.email!);
                setShowDashboard(true); // Auto-open dashboard after login
            } else {
                setAuth({ isAuthenticated: false, user: null, loading: false });
                setShowDashboard(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (authUserId: string, email: string) => {
        try {
            const { data, error } = await supabase
                .from('VoyUsers')
                .select('*')
                .eq('auth_user_id', authUserId)
                .single();
            
            if (data) {
                setAuth({
                    isAuthenticated: true,
                    loading: false,
                    user: {
                        id: data.id,
                        auth_user_id: data.auth_user_id,
                        full_name: data.full_name,
                        email: data.email,
                        role: data.role as UserRole,
                        city: data.city
                    }
                });
            } else {
                setAuth({ isAuthenticated: false, user: null, loading: false });
            }
        } catch (e) {
            console.error("Error fetching profile", e);
            setAuth({ isAuthenticated: false, user: null, loading: false });
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setAuth({ isAuthenticated: false, user: null, loading: false });
        setShowDashboard(false);
    };

    const handleOpenDashboard = () => {
        if (auth.isAuthenticated) {
            setShowDashboard(true);
        }
    };

    return (
        <HashRouter>
            <Layout auth={auth} onLogout={handleLogout} onOpenDashboard={handleOpenDashboard}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/sectores" element={<SectorsPage />} />
                    <Route path="/download" element={<DownloadPage />} />
                    <Route path="/login" element={<Login onLoginSuccess={() => setShowDashboard(true)} />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/aviso-legal" element={<LegalNotice />} />
                    <Route path="/privacidad" element={<PrivacyPolicy />} />
                    <Route path="/cookies" element={<CookiesPolicy />} />
                    <Route path="/terminos" element={<TermsOfUse />} />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                {/* Dashboard Modal */}
                {auth.isAuthenticated && auth.user && (
                    <DashboardModal
                        isOpen={showDashboard}
                        onClose={() => setShowDashboard(false)}
                        user={auth.user}
                        dashboardContent={
                            auth.user.role === UserRole.ADMIN ? (
                                <AdminDashboard />
                            ) : auth.user.role === UserRole.HELPER ? (
                                <WorkerDashboard user={auth.user} />
                            ) : (
                                <ClientDashboard user={auth.user} onToast={setToast} />
                            )
                        }
                    />
                )}

                {/* Toast Notification */}
                {toast && (
                    <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium animate-fade-in-up z-50 ${
                        toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                    }`}>
                        {toast.message}
                    </div>
                )}
            </Layout>
        </HashRouter>
    );
};
