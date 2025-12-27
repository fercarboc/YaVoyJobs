
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


interface Props {
  propertyId: string;
}

const ContactButton: React.FC<Props> = ({ propertyId }) => {
  const navigate = useNavigate();
  const { isAuthenticated, activeRole, setRole } = useAuth();

  const handleContact = () => {
    if (!isAuthenticated) {
      navigate(`/alquiler/login-required?redirect=/alquiler/${propertyId}`);
      return;
    }

    if (activeRole !== 'PARTICULAR') {
      const confirmChange = window.confirm("Para contactar necesitas modo Particular. ¿Quieres activar el modo Particular ahora?");
      if (confirmChange) {
        setRole('PARTICULAR');
        alert("Modo Particular activado. (Placeholder: Abriendo chat...)");
      }
      return;
    }

    alert("Chat abierto con el anunciante (Placeholder)");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 md:relative md:bg-transparent md:border-none md:p-0 z-40">
      <button 
        onClick={handleContact}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 md:shadow-none flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
        <span>Contactar ahora</span>
      </button>
    </div>
  );
};

export default ContactButton;
