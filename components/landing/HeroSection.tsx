import React from "react";
import { Button } from '../common/Button';

const HeroSection = () => (
  <section className="hero-section">
    <h1>Ayuda de confianza en tu barrio, en minutos</h1>
    <p>Vecinos verificados ayudando a personas mayores y comercios locales, sin costes ni suscripciones</p>
    <div className="hero-buttons">
      <Button variant="primary">Necesito ayuda en mi barrio</Button>
      <Button variant="secondary">Quiero ayudar y ganar dinero cerca de casa</Button>
    </div>
  </section>
);

export default HeroSection;
