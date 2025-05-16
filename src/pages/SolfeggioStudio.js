import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SolfeggioStudio.css';

const SolfeggioStudio = () => {
  return (
    <div className="solfeggio-studio-container">
      <h1 className="solfeggio-studio-title">Unlock Solfeggio Frequencies</h1>
      <p className="solfeggio-studio-description">
        Experience the healing power of Solfeggio frequencies to enhance your meditation, sleep, and wellness journey. This guide offers simple ways to explore these sacred tones with MantraMind.
      </p>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">The Magic of Solfeggio Frequencies</h2>
        <p className="solfeggio-studio-section-text">
          Solfeggio frequencies are ancient tones believed to promote healing and balance. Rediscovered by Dr. Joseph Puleo, each frequency offers unique benefits:
        </p>
        <ul className="solfeggio-studio-list">
          <li><strong>174 Hz</strong>: Soothes physical discomfort.</li>
          <li><strong>285 Hz</strong>: Supports healing and renewal.</li>
          <li><strong>396 Hz</strong>: Eases guilt and fear.</li>
          <li><strong>417 Hz</strong>: Sparks positive change.</li>
          <li><strong>528 Hz</strong>: Inspires transformation and love.</li>
          <li><strong>639 Hz</strong>: Deepens connections.</li>
          <li><strong>741 Hz</strong>: Boosts intuition and clarity.</li>
          <li><strong>852 Hz</strong>: Awakens spiritual insight.</li>
          <li><strong>963 Hz</strong>: Fosters enlightenment.</li>
        </ul>
        <p className="solfeggio-studio-section-text">
          <Link to="/frequencies" className="solfeggio-studio-link">Learn more about each frequency</Link>
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Listen and Feel the Benefits</h2>
        <p className="solfeggio-studio-section-text">
          You don’t need a studio to enjoy Solfeggio frequencies. Try these simple ways to experience them today:
        </p>
        <ul className="solfeggio-studio-list">
          <li>Stream free playlists on YouTube (search “Solfeggio frequencies meditation”).</li>
          <li>Use a tone generator app like “ToneGen” (available on iOS/Android).</li>
          <li>Hum or chant the frequencies yourself—match the pitch by listening to a sample.</li>
        </ul>
        <p className="solfeggio-studio-section-text">
          Listen during meditation, yoga, or bedtime to reduce stress, improve focus, or deepen sleep.
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Combine with MantraMind Practices</h2>
        <p className="solfeggio-studio-section-text">
          Pair Solfeggio frequencies with other wellness tools in MantraMind:
        </p>
        <ul className="solfeggio-studio-list">
          <li>Play 528 Hz while chanting <Link to="/chakra-chants" className="solfeggio-studio-link">Seed Mantras</Link> for heart-opening meditation.</li>
          <li>Use 174 Hz to relax during a yoga session with calming mantras.</li>
          <li>Loop 963 Hz at bedtime to enhance spiritual dreams.</li>
        </ul>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Create Your Own Frequencies</h2>
        <p className="solfeggio-studio-section-text">
          Ready to craft your own Solfeggio soundscapes? Here’s a beginner-friendly option:
        </p>
        <ul className="solfeggio-studio-list">
          <li>Download a free tone generator (e.g., “Audacity” for desktop).</li>
          <li>Generate a tone (e.g., 528 Hz, sine wave, -6 dB).</li>
          <li>Record a 10-second clip and loop it.</li>
        </ul>
        <p className="solfeggio-studio-section-text">
          For advanced users with Logic Pro X (v10.8, 2025):
        </p>
        <ul className="solfeggio-studio-list">
          <li>Create a project (192 kHz, 24-bit).</li>
          <li>Use Test Oscillator (Utility `{'>'}` Test Oscillator).</li>
          <li>Record, trim, and loop clips with ambient layers.</li>
        </ul>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Deepen Your Journey</h2>
        <p className="solfeggio-studio-section-text">
          Whether you listen or create, Solfeggio frequencies can transform your wellness routine. Explore MantraMind’s tools to personalize your practice and find inner peace.
        </p>
      </section>
    </div>
  );
};

export default SolfeggioStudio;