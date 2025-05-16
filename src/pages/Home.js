import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to MantraMind</h1>
      <p className="home-description">
        MantraMind is your sanctuary for enhancing well-being through the transformative power of sound, meditation, and mindfulness. Discover personalized mantras, explore the healing potential of Solfeggio frequencies, and embark on a journey to find inner peace.
      </p>

      <section className="home-section">
        <h2 className="home-section-title">What is MantraMind?</h2>
        <p className="home-section-text">
          At MantraMind, we believe sound and meditation can profoundly impact your emotional, mental, and physical health. Our platform offers tools to create and explore mantras tailored to your needs, alongside an in-depth guide to the ancient Solfeggio frequencies—specific sound frequencies believed to promote healing and spiritual growth. Whether you’re seeking stress relief, emotional balance, or a deeper connection to yourself, MantraMind provides a holistic experience to support your wellness journey.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">The 9 Solfeggio Frequencies</h2>
        <p className="home-section-text">
          Solfeggio frequencies are ancient tones used in sacred music, such as Gregorian chants, and are believed to have unique healing properties. Rediscovered in the 1970s by Dr. Joseph Puleo, these frequencies are thought to resonate with the body’s energy systems, promoting balance and well-being. Below are the 9 Solfeggio frequencies and their associated benefits:
        </p>
        <ul className="home-frequency-list">
          <li><strong>174 Hz – Pain Relief & Stress Reduction:</strong> Used in sound baths to ease physical discomfort and lower stress hormones, supporting emotional calm.</li>
          <li><strong>285 Hz – Healing & Tissue Regeneration:</strong> Applied in energy healing to restore cellular balance, potentially enhancing the body’s natural healing processes.</li>
          <li><strong>396 Hz – Liberate Guilt & Fear:</strong> Used in meditation to release negative emotions, reduce anxiety, and foster inner peace.</li>
          <li><strong>417 Hz – Facilitate Change & Clear Negativity:</strong> Integrated into therapy to break old patterns, clear emotional blockages, and uplift mood.</li>
          <li><strong>528 Hz – Transformation & DNA Repair:</strong> Known as the "love frequency," it’s used in music for healing and positivity, potentially influencing cellular processes.</li>
          <li><strong>639 Hz – Improve Relationships & Communication:</strong> Used in group meditations to foster harmony, enhance empathy, and reduce conflict.</li>
          <li><strong>741 Hz – Awaken Intuition & Expression:</strong> Applied in creative therapies to boost self-expression, intuition, and problem-solving.</li>
          <li><strong>852 Hz – Spiritual Order & Awareness:</strong> Used in spiritual practices to align with higher consciousness, increasing mental clarity and insight.</li>
          <li><strong>963 Hz – Divine Connection & Enlightenment:</strong> Known as the "frequency of the gods," it’s used in deep meditation to connect with universal energy and promote enlightenment.</li>
        </ul>
        <p className="home-section-text">
          <Link to="/frequencies" className="home-section-link">Learn more about Solfeggio frequencies and their benefits</Link>
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Creating Solfeggio Frequencies with Sound</h2>
        <p className="home-section-text">
          Solfeggio frequencies can be generated using various methods, making them accessible for meditation and sound therapy:
        </p>
        <ul className="home-section-list">
          <li><strong>Tuning Forks:</strong> Specially tuned forks can produce precise Solfeggio frequencies. Strike the fork and place it near your body to feel the vibrations.</li>
          <li><strong>Digital Audio Tools:</strong> Apps or software like Audacity can generate pure tones at specific Hz values. Create audio tracks for each frequency and play them during meditation.</li>
          <li><strong>Instruments:</strong> Some instruments, like crystal singing bowls or flutes, can be tuned to Solfeggio frequencies for live sound healing sessions.</li>
          <li><strong>Meditation Tracks:</strong> MantraMind offers curated audio tracks on the Frequencies page, allowing you to experience these tones effortlessly.</li>
        </ul>
        <p className="home-section-text">
          To incorporate these frequencies into your practice, try listening to a 528 Hz track during meditation to promote emotional healing, or use a 174 Hz tuning fork in a sound bath to reduce stress.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">The Science and Beyond</h2>
        <p className="home-section-text">
          While the healing claims of Solfeggio frequencies lack extensive scientific backing, preliminary studies suggest sound frequencies can influence brainwaves and promote relaxation. For example, 528 Hz has been explored for its potential effects on cellular processes, though claims like "DNA repair" remain speculative. Many users report benefits like reduced stress and enhanced focus, possibly due to the placebo effect or the calming nature of sound therapy. At MantraMind, we encourage you to explore these frequencies with an open mind and discover what resonates with you.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Get Started with MantraMind</h2>
        <p className="home-section-text">
                  Dive into your wellness journey today.
                  explore the healing tones on the <Link to="/frequencies" className="home-section-link">Frequencies page</Link>.
        </p>
      </section>
    </div>
  );
};

export default Home;