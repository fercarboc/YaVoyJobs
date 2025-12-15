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

const Landing = () => (
  <main className={styles["landing-root"]}>
    <HeroSection />
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
