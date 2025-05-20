import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/PulseFlow.css';
import AudioPlayer from '../components/AudioPlayer';

const PulseFlow = () => {
  const pulseStates = [
    { name: 'PS1 – Relaxed Awareness', desc: 'Body rests, mind alert. Ideal for stress relief.', audio: 'ps1-session.mp3' },
    { name: 'PS2 – Intuitive Flow', desc: 'Boosts creativity and emotional clarity.', audio: 'ps2-session.mp3' },
    { name: 'PS5 – Unity State', desc: 'Connects to universal energy, fostering enlightenment.', audio: 'ps5-session.mp3' },
  ];

  return (
    <div className="pulseflow-container">
      <h1 className="pulseflow-title">PulseFlow Journey</h1>
      <p className="pulseflow-description">
        Experience PulseFlow Journey, guided meditation with CoreSync Tones, wind, and chimes to reach Pulse States of calm, intuition, and unity.
      </p>

      <section className="pulseflow-section">
        <h2 className="pulseflow-section-title">Pulse States</h2>
        {pulseStates.map((state, index) => (
          <div key={index} className="pulseflow-item">
            <h3>{state.name}</h3>
            <p>{state.desc}</p>
            <AudioPlayer src={`/audio/${state.audio}`} />
          </div>
        ))}
        <p className="pulseflow-section-text">
            <Link to="/" className="pulseflow-link">Create a custom mantra</Link> {/* Create a custom mantra link */}
        </p>
      </section>

      <section className="pulseflow-section">
        <h2 className="pulseflow-section-title">How to Practice</h2>
        <ul className="pulseflow-list">
          <li>Weave distractions into a tapestry, set aside (30s–2 min).</li>
          <li>Breathe: Inhale 4s, exhale 6s, hum ‘hmmm’ with tones.</li>
          <li>Chant: “I am boundless, flowing with universal rhythms, guided by inner light, safe.”</li>
          <li>Play a session with headphones, rest, and explore.</li>
        </ul>
        <p className="pulseflow-section-text">
          <Link to="/solfeggio-studio" className="pulseflow-link">Add Solfeggio frequencies</Link>
        </p>
      </section>
    </div>
  );
};

export default PulseFlow;