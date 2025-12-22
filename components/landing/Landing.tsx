import React from "react";
import styles from "./Landing.module.css";

import HeroSection from "./HeroSection";
import ProblemaSocial from "./ProblemaSocial";
import SolucionYaVoyJobs from "./SolucionYaVoyJobs";
import ComoFunciona from "./ComoFunciona";
import BarrioABarrio from "./BarrioABarrio";
import PersonasMayores from "./PersonasMayores";
import ComercioCercania from "./ComercioCercania";
import ConfianzaSeguridad from "./ConfianzaSeguridad";
import LlamadasAccion from "./LlamadasAccion";
import IncentiveCard from "./IncentiveCard";


const Landing = () => (
  <main className={styles["landing-root"]}>
    <HeroSection />

    {/* Sección de incentivos */}
    <section className={styles["incentive-section"]}>
      <h2>¡Incentivos para nuevos usuarios y amigos!</h2>
      <div className={styles["incentive-cards-row"]}>
        <IncentiveCard
          title="Gana 10 € por registrarte"
          description="Descarga la app y regístrate. Cuando completes 2 trabajos aceptados, recibirás 10 € de incentivo directo en tu cuenta. ¡Así de fácil!"
          icon={<span role='img' aria-label='regalo'>🎁</span>}
          color="#7AC47A"
        />
        <IncentiveCard
          title="+10 € por invitar a un amigo"
          description="Si traes a un amigo y se registra, ambos recibiréis 10 € extra (una única vez por usuario registrado). ¡Comparte y gana juntos!"
          icon={<span role='img' aria-label='amigos'>🤝</span>}
          color="#3A6EA5"
        />
      </div>
      <div className={styles["incentive-contact"]}>
        ¿Tienes dudas o quieres más información? <br />
        Escríbenos a <a href="mailto:contacto@yavoyjobs.com">contacto@yavoyjobs.com</a> o por WhatsApp al <a href="https://wa.me/34666666666" target="_blank" rel="noopener noreferrer">+34 666 666 666</a>
      </div>
    </section>

    <ProblemaSocial />
    <SolucionYaVoyJobs />
    <ComoFunciona />
    <BarrioABarrio />
    <PersonasMayores />
    <ComercioCercania />
    <ConfianzaSeguridad />
    <LlamadasAccion />
  </main>
);

export default Landing;
