import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChakraChants.css';

const ChakraChants = () => {
  return (
    <div className="chakra-chants-container">
      <h1 className="chakra-chants-title">Chakra Chants: Seed Mantras</h1>
      <p className="chakra-chants-description">
        Seed Mantras, or Bija Mantras, are sacred sounds that resonate with the body’s seven chakras, promoting balance and healing. Chant these to enhance your meditation practice.
      </p>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Root Chakra: LAM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "LUM," LAM grounds you, fostering stability and security. It connects you to the earth, easing fear and enhancing physical vitality.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Sacral Chakra: VAM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "VUM," VAM ignites creativity and passion. It supports emotional flow, sensuality, and the release of guilt or shame.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Solar Plexus Chakra: RAM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "RUM," RAM boosts confidence and personal power. It enhances self-esteem, willpower, and the ability to manifest goals.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Heart Chakra: YAM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "YUM," YAM opens the heart to love and compassion. It heals emotional wounds, fostering forgiveness and connection.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Throat Chakra: HAM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "HUM," HAM enhances communication and truth. It supports self-expression, clarity, and the release of suppressed emotions.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Third Eye Chakra: OM</h2>
        <p className="chakra-chants-section-text">
          Pronounced "OHM," OM sharpens intuition and insight. It deepens spiritual awareness, clarity of thought, and connection to the divine.
        </p>
      </section>

      <section className="chakra-chants-section">
        <h2 className="chakra-chants-section-title">Crown Chakra: AAH</h2>
        <p className="chakra-chants-section-text">
          Pronounced "AH" or as a silent OM, AAH connects you to universal consciousness. It promotes enlightenment, peace, and spiritual unity.
        </p>
        <p className="chakra-chants-section-text">
          <Link to="/mantras" className="chakra-chants-link">Explore more mantras for your practice</Link>
        </p>
      </section>
    </div>
  );
};

export default ChakraChants;