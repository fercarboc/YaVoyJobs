
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthState, UserRole, User, Job, JobStatus, PeriodType, ContractType, DAYS_OF_WEEK, COMPANY_SECTORS, CompanySector } from './types';
import { Icons } from './components/Icons';
import { optimizeJobDescription, suggestJobPrice } from './services/geminiService';
import { supabase } from './services/supabase';
import { LegalNotice, PrivacyPolicy, CookiesPolicy, TermsOfUse } from './components/LegalPages';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

// --- INITIAL STATE ---
const INITIAL_AUTH: AuthState = { isAuthenticated: false, user: null, loading: true };

// --- COMPONENTS ---

// 1. LANDING PAGE
const Landing = () => {
  const navigate = useNavigate();
  const [neighEmail, setNeighEmail] = useState('');
  const [neighCP, setNeighCP] = useState('');
  const [neighLoading, setNeighLoading] = useState(false);
  const [neighSent, setNeighSent] = useState(false);

  const handleNeighborhoodRequest = async () => {
    if (!neighEmail || !neighCP) {
      alert('Introduce tu email y código postal.');
      return;
    }
    setNeighLoading(true);
    try {
      const { data: admins, error: adminErr } = await supabase
        .from('VoyUsers')
        .select('id, full_name')
        .eq('role', 'ADMIN');

      if (adminErr) throw adminErr;

      if (admins && admins.length > 0) {
        const notifications = admins.map((a: any) => ({
          user_id: a.id,
          title: 'Solicitud: YaVoy en nuevo barrio',
          message: `Solicitud de lanzamiento: email ${neighEmail} · C.P. ${neighCP}`,
          type: 'SYSTEM',
          is_read: false
        }));

        const { error: notifErr } = await supabase
          .from('VoyNotifications')
          .insert(notifications);

        if (notifErr) throw notifErr;
      }

      setNeighSent(true);
      alert('Gracias — avisaremos cuando lleguemos a tu barrio');
      setNeighEmail('');
      setNeighCP('');
    } catch (err) {
      console.error('Error sending neighborhood request', err);
      alert('Error enviando solicitud. Intenta de nuevo.');
    } finally {
      setNeighLoading(false);
    }
  };

  return (
    <div className="w-full font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-brand-500 to-brand-700 text-white pt-16 pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 30 50 70 50 100 100 L 100 0 L 0 0 Z" fill="white" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-400 bg-opacity-30 border border-brand-300 text-sm font-semibold mb-2 backdrop-blur-sm">
                👋 Hola vecinos de Madrid
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                ¿Necesitas ayuda <br/>cerca de casa? <span className="text-brand-200">YaVoy.</span>
              </h1>
              <div className="text-lg md:text-xl text-brand-50 max-w-lg mx-auto md:mx-0 leading-relaxed space-y-2">
                <p>Microservicios en tu barrio: rápido, fácil y de confianza.</p>
                <p className="font-semibold text-white bg-white/10 p-2 rounded-lg inline-block border border-white/20">
                   💰 Tú decides el precio. <span className="font-normal opacity-90">Ofrece una recompensa justa por la ayuda que necesitas.</span>
                </p>
              </div>
              
              {/* Quick Categories */}
              <div className="flex justify-center md:justify-start space-x-4 py-2">
                <button onClick={() => {
                  const el = document.getElementById('servicios');
                  if(el) el.scrollIntoView({ behavior: 'smooth'});
                }} className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <Icons.PawPrint size={24} />
                  </div>
                  <span className="text-sm mt-2 font-medium opacity-90">Mascotas</span>
                </button>
                <button onClick={() => {
                  const el = document.getElementById('servicios');
                  if(el) el.scrollIntoView({ behavior: 'smooth'});
                }} className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <Icons.ShoppingCart size={24} />
                  </div>
                  <span className="text-sm mt-2 font-medium opacity-90">Recados</span>
                </button>
                <button onClick={() => {
                  const el = document.getElementById('servicios');
                  if(el) el.scrollIntoView({ behavior: 'smooth'});
                }} className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                    <Icons.Heart size={24} />
                  </div>
                  <span className="text-sm mt-2 font-medium opacity-90">Cuidados</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button onClick={() => navigate('/download')} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1 flex items-center justify-center">
                  <Icons.Download className="mr-2" size={20}/>
                  Descargar App
                </button>
                <button onClick={() => navigate('/register')} className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-50 transition transform hover:-translate-y-1">
                  Publicar una tarea
                </button>
              </div>
            </div>
            
            {/* Cleaner App Visual */}
            <div className="hidden md:block relative">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
               
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl relative transform rotate-1 hover:rotate-0 transition duration-500">
                 {/* App Interface Mockup */}
                 <div className="bg-white rounded-2xl h-96 w-full overflow-hidden relative border border-slate-200 shadow-inner flex flex-col">
                    {/* Mock Header */}
                    <div className="bg-brand-500 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Icons.User size={16}/></div>
                            <div className="h-2 w-24 bg-white/20 rounded"></div>
                        </div>
                        <Icons.Menu size={20} className="opacity-70"/>
                    </div>
                    {/* Mock Content */}
                    <div className="p-4 space-y-3 bg-slate-50 flex-grow">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3">
                            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><Icons.ShoppingCart size={16}/></div>
                            <div className="space-y-0.5 flex-grow">
                                <div className="text-xs font-bold text-slate-800">Hacer la Compra</div>
                                <div className="text-[10px] text-slate-500">y llevarla a Casa</div>
                            </div>
                            <div className="text-emerald-600 font-bold text-xs">15€</div>
                        </div>
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3 opacity-90">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Icons.PawPrint size={16}/></div>
                            <div className="space-y-0.5 flex-grow">
                                <div className="text-xs font-bold text-slate-800">Pasear a Boby</div>
                                <div className="text-[10px] text-slate-500">1 hora</div>
                            </div>
                            <div className="text-blue-600 font-bold text-xs">10€</div>
                        </div>
                         <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-3 opacity-75">
                            <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Icons.Hammer size={16}/></div>
                            <div className="space-y-0.5 flex-grow">
                                <div className="text-xs font-bold text-slate-800">Montar Estantería</div>
                                <div className="text-[10px] text-slate-500">de Ikea</div>
                            </div>
                            <div className="text-amber-600 font-bold text-xs">25€</div>
                        </div>
                        
                         {/* Floating "Accepted" Notification */}
                        <div className="absolute bottom-6 right-6 left-6 bg-slate-900 text-white p-3 rounded-lg shadow-xl flex items-center space-x-3 animate-bounce" style={{animationDuration: '3s'}}>
                             <div className="bg-green-500 rounded-full p-1"><Icons.CheckCircle size={12}/></div>
                             <div className="text-xs font-medium">¡Juan aceptó tu tarea!</div>
                        </div>
                    </div>
                 </div>
               </div>
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
              <button onClick={() => navigate('/register')} className="w-full py-3 rounded-xl bg-white text-brand-600 font-bold hover:shadow-lg transition shadow-sm border border-brand-100">
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
              <button onClick={() => navigate('/register')} className="w-full py-3 rounded-xl bg-white text-amber-600 font-bold hover:shadow-lg transition shadow-sm border border-amber-100">
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
              <button onClick={() => navigate('/register')} className="w-full py-3 rounded-xl bg-white text-emerald-600 font-bold hover:shadow-lg transition shadow-sm border border-emerald-100">
                Para tu mejor amigo
              </button>
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
         </div>
      </section>

      {/* 4. TRUST & SAFETY & REVIEWS */}
      <section id="opiniones" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Lo que dicen nuestros vecinos</h2>
             <p className="text-lg text-slate-500 mt-2">Transacciones reales, personas reales.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Review 1 - Client */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
                  <div className="absolute top-4 right-4 bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Cliente</div>
                  <div className="flex items-center mb-4 text-yellow-400">
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4">"Me arreglaron el grifo de la cocina en una hora. Rápido y muy apañado."</p>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900">Carmen L.</span>
                      <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">Pagué 40€</span>
                  </div>
              </div>

              {/* Review 2 - Helper */}
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Ayudante</div>
                  <div className="flex items-center mb-4 text-yellow-400">
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4">"Ayudé con una mudanza pequeña el sábado por la mañana. Dinero extra muy fácil."</p>
                  <div className="border-t border-brand-200 pt-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900">Javier M.</span>
                      <span className="text-xs bg-emerald-200 px-2 py-1 rounded text-emerald-800 font-bold">Gané 60€</span>
                  </div>
              </div>

               {/* Review 3 - Client */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
                  <div className="absolute top-4 right-4 bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Cliente</div>
                   <div className="flex items-center mb-4 text-yellow-400">
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4">"Necesitaba que pasearan a mi perro por estar con gripe. Laura fue encantadora."</p>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900">Elena R.</span>
                      <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700">Pagué 12€</span>
                  </div>
              </div>

               {/* Review 4 - Helper */}
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 relative">
                  <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Ayudante</div>
                  <div className="flex items-center mb-4 text-yellow-400">
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                       <Icons.Star fill="currentColor" size={16}/>
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4">"Hice la compra a una vecina mayor. Me invitó a café y me pagó al momento."</p>
                  <div className="border-t border-brand-200 pt-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-900">Marcos T.</span>
                      <span className="text-xs bg-emerald-200 px-2 py-1 rounded text-emerald-800 font-bold">Gané 15€</span>
                  </div>
              </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/2 hidden md:block">
                <div className="bg-brand-50 rounded-3xl p-8 relative overflow-hidden">
                   <div className="absolute -right-10 -bottom-10 opacity-10">
                       <Icons.Shield size={200} />
                   </div>
                   <h3 className="text-2xl font-bold text-brand-800 mb-4">Garantía YaVoy</h3>
                   <ul className="space-y-4">
                       <li className="flex items-start">
                           <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600"><Icons.CheckCircle size={20}/></div>
                           <p className="text-brand-900 text-sm">Los pagos se liberan solo cuando confirmas que el trabajo está hecho.</p>
                       </li>
                       <li className="flex items-start">
                           <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600"><Icons.UserCheck size={20}/></div>
                           <p className="text-brand-900 text-sm">Todos los ayudantes pasan un proceso de verificación de identidad.</p>
                       </li>
                       <li className="flex items-start">
                           <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-brand-600"><Icons.MessageCircle size={20}/></div>
                           <p className="text-brand-900 text-sm">Soporte directo para mediar en cualquier incidencia.</p>
                       </li>
                   </ul>
                </div>
             </div>
             <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Seguridad y confianza ante todo</h2>
                <p className="text-lg text-slate-500">YaVoy es comunidad, no anonimato. Ayudamos a que los vecinos se ayuden con total tranquilidad.</p>
                
                <div className="space-y-4">
                   <div className="flex items-start">
                     <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1"><Icons.UserCheck size={20}/></div>
                     <div>
                       <h4 className="font-bold text-slate-800">Verificación de identidad</h4>
                       <p className="text-sm text-slate-600">Sabes quién viene a tu casa. Verificamos DNIs y perfiles.</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1"><Icons.Star size={20}/></div>
                     <div>
                       <h4 className="font-bold text-slate-800">Valoraciones reales</h4>
                       <p className="text-sm text-slate-600">Tú eliges basándote en la experiencia de otros vecinos.</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="bg-brand-100 p-2 rounded-lg mr-4 text-brand-600 mt-1"><Icons.MessageCircle size={20}/></div>
                     <div>
                       <h4 className="font-bold text-slate-800">Chat seguro</h4>
                       <p className="text-sm text-slate-600">Habla y acuerda detalles sin necesidad de dar tu número personal.</p>
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
                         <input
                           type="email"
                           placeholder="Tu email"
                           value={neighEmail}
                           onChange={(e) => setNeighEmail(e.target.value)}
                           className="flex-grow px-4 py-3 rounded-lg text-slate-900 bg-white outline-none focus:ring-2 focus:ring-brand-500"
                         />
                         <input
                           type="text"
                           placeholder="Tu C.P."
                           value={neighCP}
                           onChange={(e) => setNeighCP(e.target.value)}
                           className="w-full sm:w-24 px-4 py-3 rounded-lg text-slate-900 bg-white outline-none focus:ring-2 focus:ring-brand-500"
                         />
                         <button
                           onClick={handleNeighborhoodRequest}
                           disabled={neighLoading || neighSent}
                           className={`px-6 py-3 rounded-lg font-bold transition text-white ${neighLoading || neighSent ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-500 hover:bg-brand-600'}`}
                         >
                           {neighLoading ? 'Enviando...' : neighSent ? 'Enviado' : 'Avisadme'}
                         </button>
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
          .select('id, auth_user_id, full_name, role, email, city, district, company_sector')
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
    companySector: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailConfirmationPending, setEmailConfirmationPending] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // If company, require sector
    if (activeTab === 'COMPANY' && !formData.companySector) {
      setError('Selecciona el sector principal de la empresa');
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
              company_sector: formData.companySector || null
            }
          ]);

        if (profileError) throw profileError;
        
        // Show email confirmation message
        setRegisteredEmail(formData.email);
        setEmailConfirmationPending(true);
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

  const handleConfirmEmailClose = () => {
    setEmailConfirmationPending(false);
    navigate('/login');
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
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">CIF / NIF</label>
                    <input name="cif" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none" />
                 </div>
              )}

              {activeTab === 'COMPANY' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sector principal de la empresa</label>
                  <select
                    value={formData.companySector}
                    onChange={(e) => setFormData({ ...formData, companySector: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">Selecciona un sector</option>
                    {COMPANY_SECTORS.map(s => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </div>
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

      {/* Email Confirmation Modal */}
      {emailConfirmationPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icons.Mail size={32} className="text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Confirma tu Email</h2>
            <p className="text-slate-600 mb-6">
              Hemos enviado un enlace de confirmación a:
              <br />
              <span className="font-bold text-brand-600">{registeredEmail}</span>
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm text-slate-700 text-left space-y-2">
              <p>📧 <span className="font-medium">Revisa tu bandeja de entrada</span> (y spam si es necesario)</p>
              <p>🔗 Haz clic en el enlace de confirmación</p>
              <p>✅ Después podrás iniciar sesión con tu email y contraseña</p>
            </div>
            <button
              onClick={handleConfirmEmailClose}
              className="w-full bg-brand-500 text-white py-3 rounded-lg font-bold hover:bg-brand-600 transition shadow-lg"
            >
              Entendido, ir a Login
            </button>
            <p className="text-xs text-slate-500 mt-4">¿No recibiste el email? Revisa spam o intenta registrarte de nuevo.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// 4. DASHBOARDS

// --- ADMIN ---
const AdminDashboard = () => {
    // Mock data for Admin demo
    const data = [
      { name: 'Lun', jobs: 40 },
      { name: 'Mar', jobs: 30 },
      { name: 'Mie', jobs: 20 },
      { name: 'Jue', jobs: 27 },
      { name: 'Vie', jobs: 18 },
      { name: 'Sab', jobs: 23 },
      { name: 'Dom', jobs: 34 },
    ];
    
    const pieData = [
        { name: 'Particulares', value: 400 },
        { name: 'Empresas', value: 300 },
        { name: 'Trabajadores', value: 300 },
    ];
    const COLORS = ['#3b82f6', '#8b5cf6', '#10b981'];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                <Icons.LayoutDashboard className="mr-3" /> Panel de Administración
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-slate-500 text-sm uppercase font-bold">Total Usuarios</h3>
                    <p className="text-4xl font-bold text-slate-900 mt-2">1,240</p>
                    <span className="text-emerald-500 text-sm font-medium flex items-center mt-1"><Icons.ArrowRight size={14} className="transform -rotate-45 mr-1"/> +12% esta semana</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-slate-500 text-sm uppercase font-bold">Trabajos Activos</h3>
                    <p className="text-4xl font-bold text-brand-600 mt-2">86</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-slate-500 text-sm uppercase font-bold">Volumen Transaccionado</h3>
                    <p className="text-4xl font-bold text-slate-900 mt-2">14.5k €</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
                    <h3 className="font-bold text-slate-800 mb-4">Actividad Semanal</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <ReTooltip cursor={{fill: '#e0f2fe'}} />
                            <Bar dataKey="jobs" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex flex-col items-center">
                    <h3 className="font-bold text-slate-800 mb-4 self-start">Distribución de Usuarios</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={110}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" height={36}/>
                            <ReTooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
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
    
    // New Job Form State
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('OTROS');
    const [jobSector, setJobSector] = useState<CompanySector | ''>(user.company_sector || '');
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

    // (removed) suggested helpers effect — belongs to WorkerDashboard

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

    // Returns true if the given job already has an accepted candidate
    const hasAcceptedCandidate = (jobId: string): boolean => {
      const jobApplicants = applicants[jobId] || [];
      return jobApplicants.some((app: any) => app.status === 'ACCEPTED');
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
          if (user.role === UserRole.COMPANY) {
            (jobData as any).sector = jobSector || user.company_sector || null;
          }

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
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-slate-800">Mis Anuncios</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-brand-600 flex items-center"
                >
                    <Icons.Sparkles size={18} className="mr-2" />
                    Publicar Nuevo
                </button>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-gray-500 text-xs uppercase font-bold">Activos</span>
                    <p className="text-2xl font-bold text-brand-600">{jobs.filter(j => j.status === 'OPEN').length}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-gray-500 text-xs uppercase font-bold">Completados</span>
                    <p className="text-2xl font-bold text-emerald-600">{jobs.filter(j => j.status === 'COMPLETED').length}</p>
                </div>
            </div>

            {/* List */}
            {loading ? (
              <div className="text-center py-12">Cargando...</div>
            ) : (
              <div className="space-y-4">
                    {jobs.map(job => (
                      <div key={job.id} className={`${hasAcceptedCandidate(job.id) ? 'bg-gray-100 border border-gray-200 rounded-xl overflow-hidden transition opacity-70' : 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition'}`}>
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
                                          
                                            <span className={`block px-3 py-1 rounded-full text-xs font-bold mt-2 ${hasAcceptedCandidate(job.id) ? 'bg-rose-100 text-rose-700' : job.status === 'OPEN' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}`}>
                                              {hasAcceptedCandidate(job.id) ? '✓ Candidato Aceptado' : (job.status === 'OPEN' ? 'Buscando...' : job.status)}
                                            </span>
                                      </div>

                                      {/* Candidatos Counter */}
                                        <button
                                          onClick={() => !hasAcceptedCandidate(job.id) && setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                                          disabled={hasAcceptedCandidate(job.id)}
                                          className={`flex items-center space-x-2 mb-3 px-3 py-2 rounded-lg transition ${hasAcceptedCandidate(job.id) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                                          <Icons.Users size={18} />
                                          <span className="font-bold text-sm">{applicants[job.id]?.length || 0} candidatos</span>
                                        </button>
                                  </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                                      <button
                                        onClick={() => { setEditingJobId(job.id); setIsModalOpen(true); }}
                                        disabled={hasAcceptedCandidate(job.id)}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition text-sm ${hasAcceptedCandidate(job.id) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                                      >
                                        <Icons.Edit3 size={16} />
                                        Editar
                                      </button>
                                      <button
                                        onClick={() => handleDeleteJob(job.id)}
                                        disabled={hasAcceptedCandidate(job.id)}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition text-sm ${hasAcceptedCandidate(job.id) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
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
                                            <option value="OTROS">Otros</option>
                                            <option value="MAYORES">Mayores</option>
                                            <option value="HOGAR">Hogar</option>
                                            <option value="MASCOTAS">Mascotas</option>
                                            <option value="RECADOS">Recados</option>
                                            <option value="DIGITAL">Tecnología</option>
                                        </select>
                                    </div>
                                    {user.role === UserRole.COMPANY && (
                                      <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Sector (empresa)</label>
                                        <select value={jobSector} onChange={e => setJobSector(e.target.value as CompanySector)} className="w-full px-4 py-2 border rounded-lg bg-white text-slate-900 outline-none">
                                          <option value="">Usar sector de perfil ({user.company_sector || 'sin sector'})</option>
                                          {COMPANY_SECTORS.map(s => (
                                            <option key={s.id} value={s.id}>{s.label}</option>
                                          ))}
                                        </select>
                                      </div>
                                    )}
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
    const [activeTab, setActiveTab] = useState<'available' | 'my-applications'>('available');
    const [applyFormData, setApplyFormData] = useState({
      message: '',
      proposedPrice: '',
      proposedHourlyRate: ''
    });

    useEffect(() => {
      fetchJobs();
      fetchAppliedJobs();
      fetchMyApplications();
    }, [user.id]);

    // Realtime subscriptions: listen for application changes to update UI immediately
    useEffect(() => {
      if (!user.id) return;

      const channel = supabase.channel('public:VoyJobApplications')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'VoyJobApplications' }, (payload) => {
          console.log('Realtime job application payload:', payload);
          try {
            const newApp = (payload as any).new;
            const oldApp = (payload as any).old;

            // If this change concerns the current helper, refresh their applications and appliedJobs
            if (newApp?.helper_user_id === user.id || oldApp?.helper_user_id === user.id) {
              fetchMyApplications();
              fetchAppliedJobs();
            }

            // If an application's status changed to ACCEPTED (or was accepted), refresh jobs to update UI (grey-out)
            if (newApp?.status === 'ACCEPTED' || oldApp?.status === 'ACCEPTED') {
              fetchJobs();
            }
          } catch (e) {
            console.error('Realtime payload handling error', e);
          }
        })
        .subscribe();

      return () => {
        try { supabase.removeChannel(channel); } catch (e) { /* ignore cleanup errors */ }
      };
    }, [user.id]);

    const [sectorFilter, setSectorFilter] = useState<CompanySector | ''>('');
    const [suggestedHelpers, setSuggestedHelpers] = useState<any[]>([]);

    const fetchSuggestedHelpers = async (sector: CompanySector | '') => {
      if (!sector) {
        setSuggestedHelpers([]);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('VoyJobApplications')
          .select('helper:VoyUsers(id, full_name, email, phone), job:VoyJobs(id, title, creator:VoyUsers(company_sector))')
          .order('created_at', { ascending: false })
          .limit(200);

        if (error) throw error;

        const helpersMap: Record<string, any> = {};
        (data || []).forEach((app: any) => {
          const jobSector = app.job?.creator?.company_sector;
          const helper = app.helper;
          if (jobSector === sector && helper) {
            helpersMap[helper.id] = helper;
          }
        });

        setSuggestedHelpers(Object.values(helpersMap));
      } catch (err) {
        console.error('Error fetching suggested helpers', err);
        setSuggestedHelpers([]);
      }
    };

    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('VoyJobs')
          .select('*, creator:VoyUsers(full_name, company_sector), schedule:VoyWorkSchedules(*), contract:VoyWorkContracts(*)')
          .eq('status', 'OPEN')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setAvailableJobs(data as unknown as Job[] || []);
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

    const filtered = (filter === 'all' ? availableJobs : availableJobs.filter(j => j.category === filter))
      .filter(j => {
        if (!sectorFilter) return true;
        return j.creator?.company_sector === sectorFilter;
      });

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
            </div>

            {/* Available Jobs Tab */}
            {activeTab === 'available' && (
              <>
                <div className="flex overflow-x-auto space-x-2 pb-4 mb-4 scrollbar-hide">
                  {['all', 'MAYORES', 'HOGAR', 'MASCOTAS', 'RECADOS', 'DIGITAL'].map(cat => (
                      <button 
                          key={cat}
                          onClick={() => setFilter(cat)}
                          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${filter === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-gray-50'}`}
                      >
                          {cat === 'all' ? 'Todos' : cat}
                      </button>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <label className="text-sm text-gray-600">Filtrar por sector:</label>
                    <select
                      value={sectorFilter}
                      onChange={(e) => setSectorFilter(e.target.value as CompanySector)}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                    >
                      <option value="">Todos</option>
                      {COMPANY_SECTORS.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>

                    {/* Quick chips for common sectors */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSectorFilter('HOSTELERIA_RESTAURACION')} className={`px-3 py-1 rounded-full text-sm ${sectorFilter === 'HOSTELERIA_RESTAURACION' ? 'bg-slate-900 text-white' : 'bg-white border border-gray-200 text-slate-700'}`}>Hostelería</button>
                      <button onClick={() => setSectorFilter('LOGISTICA_ALMACEN')} className={`px-3 py-1 rounded-full text-sm ${sectorFilter === 'LOGISTICA_ALMACEN' ? 'bg-slate-900 text-white' : 'bg-white border border-gray-200 text-slate-700'}`}>Logística</button>
                      <button onClick={() => setSectorFilter('COMERCIO_RETAIL')} className={`px-3 py-1 rounded-full text-sm ${sectorFilter === 'COMERCIO_RETAIL' ? 'bg-slate-900 text-white' : 'bg-white border border-gray-200 text-slate-700'}`}>Comercio</button>
                      <button onClick={() => setSectorFilter('')} className="px-2 py-1 rounded-full text-sm bg-white border border-gray-200 text-slate-500">Limpiar</button>
                    </div>
                  </div>

                </div>

                {/* Suggested Helpers Panel */}
                {sectorFilter && suggestedHelpers.length > 0 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                      <Icons.Users size={16} className="mr-2 text-emerald-600" />
                      Ayudantes Sugeridos en {COMPANY_SECTORS.find(s => s.id === sectorFilter)?.short || sectorFilter}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {suggestedHelpers.map(helper => (
                        <div key={helper.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-emerald-700 font-bold text-sm">{(helper.full_name || 'U').charAt(0)}</span>
                            </div>
                            <div className="flex-grow min-w-0">
                              <p className="font-semibold text-sm text-slate-900 truncate">{helper.full_name}</p>
                              <p className="text-xs text-gray-500">Ayudante</p>
                            </div>
                          </div>
                          <div className="space-y-1 mb-3 text-xs text-gray-600">
                            {helper.email && (
                              <div className="flex items-center gap-2 truncate">
                                <Icons.Mail size={12} className="text-gray-400 flex-shrink-0" />
                                <span className="truncate">{helper.email}</span>
                              </div>
                            )}
                            {helper.phone && (
                              <div className="flex items-center gap-2">
                                <Icons.Phone size={12} className="text-gray-400 flex-shrink-0" />
                                <span>{helper.phone}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                if (helper.email) {
                                  window.location.href = `mailto:${helper.email}`;
                                }
                              }}
                              disabled={!helper.email}
                              className="flex-1 px-2 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded hover:bg-blue-100 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                            >
                              <Icons.Mail size={12} />
                              Contactar
                            </button>
                            <button
                              className="flex-1 px-2 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded hover:bg-gray-200 transition flex items-center justify-center gap-1"
                            >
                              <Icons.ExternalLink size={12} />
                              Perfil
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                                          <div className="flex items-center space-x-2">
                                            <span className="text-sm font-medium text-gray-700 truncate max-w-[100px]">{job.creator?.full_name || 'Usuario'}</span>
                                            {job.creator?.company_sector && (
                                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-slate-700">{COMPANY_SECTORS.find(s => s.id === job.creator!.company_sector)?.short || job.creator!.company_sector}</span>
                                            )}
                                          </div>
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
              <div className="space-y-4">
                {myApplications.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <Icons.FileText size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No has enviado ninguna candidatura aún</p>
                  </div>
                ) : (
                  myApplications.map(app => (
                    <div key={app.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-300 transition">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-slate-900">{app.job?.title}</h3>
                          <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                              {(app.job?.creator?.full_name || 'U').charAt(0)}
                            </div>
                            {app.job?.creator?.full_name || 'Usuario desconocido'}
                          </div>
                        </div>
                        <div>
                          {getStatusBadge(app.status)}
                        </div>
                      </div>

                      {/* Application Details */}
                      <div className="space-y-3 text-sm text-gray-600 mb-4">
                        {app.message && (
                          <div>
                            <p className="font-medium text-gray-700 mb-1">Tu mensaje:</p>
                            <p className="text-gray-600 italic">"{app.message}"</p>
                          </div>
                        )}
                        {app.proposed_price && (
                          <p><span className="font-medium text-gray-700">Precio propuesto:</span> {app.proposed_price}€</p>
                        )}
                        {app.proposed_hourly_rate && (
                          <p><span className="font-medium text-gray-700">Tarifa propuesta:</span> {app.proposed_hourly_rate}€/h</p>
                        )}
                        <p className="text-gray-500 text-xs">
                          Candidatura enviada el {new Date(app.created_at).toLocaleDateString('es-ES')} a las {new Date(app.created_at).toLocaleTimeString('es-ES')}
                        </p>
                      </div>

                      {/* Job Details Preview */}
                      {app.job && (
                        <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 mb-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div><span className="font-medium">Ubicación:</span> {app.job.city || 'Madrid'}</div>
                            {app.job.price_fixed && <div><span className="font-medium">Presupuesto:</span> {app.job.price_fixed}€</div>}
                            {app.job.price_hourly && <div><span className="font-medium">Tarifa:</span> {app.job.price_hourly}€/h</div>}
                            {app.job.contract && app.job.contract[0]?.monthly_salary && <div><span className="font-medium">Salario:</span> {app.job.contract[0].monthly_salary}€/mes</div>}
                          </div>
                        </div>
                      )}

                      {/* Status Message */}
                      {app.status === 'ACCEPTED' && (
                        <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-sm text-emerald-700">
                          ¡Felicidades! Tu candidatura ha sido aceptada. El empleador debería contactarte pronto.
                        </div>
                      )}
                      {app.status === 'REJECTED' && (
                        <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-sm text-red-700">
                          Tu candidatura ha sido rechazada. ¡Pero no te desanimes! Sigue buscando otras oportunidades.
                        </div>
                      )}
                      {app.status === 'PENDING' && (
                        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-700">
                          Tu candidatura está en revisión. El empleador la está considerando.
                        </div>
                      )}
                    </div>
                  ))
                )}
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
            } else {
                setAuth({ isAuthenticated: false, user: null, loading: false });
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (authUserId: string, email: string) => {
        try {
            const { data, error } = await supabase
              .from('VoyUsers')
              .select('id, auth_user_id, full_name, role, email, city, district, company_sector')
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
                    city: data.city,
                    district: data.district,
                    company_sector: data.company_sector
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
    };

    

    return (
        <HashRouter>
            <Layout auth={auth} onLogout={handleLogout}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/download" element={<DownloadPage />} />
                    <Route path="/login" element={<Login onLoginSuccess={() => {}} />} />
                    <Route path="/register" element={<Register />} />
                    
                    <Route path="/aviso-legal" element={<LegalNotice />} />
                    <Route path="/privacidad" element={<PrivacyPolicy />} />
                    <Route path="/cookies" element={<CookiesPolicy />} />
                    <Route path="/terminos" element={<TermsOfUse />} />
                    
                    <Route path="/admin" element={
                        <ProtectedRoute auth={auth} roles={[UserRole.ADMIN]}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/client" element={
                        <ProtectedRoute auth={auth} roles={[UserRole.PARTICULAR, UserRole.COMPANY]}>
                            {auth.user ? <ClientDashboard user={auth.user} onToast={setToast} /> : <div></div>}
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/worker" element={
                        <ProtectedRoute auth={auth} roles={[UserRole.HELPER]}>
                            {auth.user ? <WorkerDashboard user={auth.user} /> : <div></div>}
                        </ProtectedRoute>
                    } />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

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