import React from 'react';
import '../styles/SolfeggioStudio.css';

const SolfeggioStudio = () => {
  return (
    <div className="solfeggio-studio-container">
      <h1 className="solfeggio-studio-title">Building a Solfeggio Studio</h1>
      <p className="solfeggio-studio-description">
        Discover how to create a professional studio for generating the 9 Solfeggio frequencies, recording them with precision, and crafting looping sound clips for sleep. This guide walks you through the process, ensuring high-quality output for your wellness journey.
      </p>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Understanding Solfeggio Frequencies</h2>
        <p className="solfeggio-studio-section-text">
          The Solfeggio frequencies are ancient tones believed to have healing properties, rooted in Gregorian chants and rediscovered in the 1970s by Dr. Joseph Puleo. They include 174 Hz (pain relief), 285 Hz (healing), 396 Hz (liberating guilt), 417 Hz (facilitating change), 528 Hz (transformation), 639 Hz (relationships), 741 Hz (intuition), 852 Hz (spiritual awareness), and 963 Hz (enlightenment). These frequencies are not part of the standard musical scale and require precise generation for therapeutic use.
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Setting Up Your Studio</h2>
        <p className="solfeggio-studio-section-text">
          A high-quality studio ensures accurate frequency generation and recording. Start with a soundproofed room to eliminate noise, using acoustic panels and bass traps. Maintain a stable environment (20°C, 40-60% humidity) to protect equipment. Essential gear includes a Neumann U87 Ai microphone, Focusrite Clarett+ 4Pre audio interface, Beyerdynamic DT 1990 Pro headphones, and Genelec 8030C studio monitors for precise playback.
        </p>
        <p className="solfeggio-studio-section-text">
          For physical generation, acquire Solfeggio tuning forks or crystal singing bowls tuned to each frequency. Logic Pro X (version 10.8, May 2025) will be your primary software for digital generation, editing, and mixing, offering high-resolution audio support (24-bit/192 kHz).
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Generating Frequencies with Logic Pro X</h2>
        <p className="solfeggio-studio-section-text">
          Logic Pro X can generate pure tones for each Solfeggio frequency. Create a new project with a sample rate of 192 kHz and 24-bit depth. Add a software instrument track and load the Test Oscillator plugin (Utility `{'>'}` Test Oscillator). Set the waveform to sine, frequency to your target (e.g., 528 Hz), and level to -6 dB. Record a 10-second clip for each frequency: 174 Hz, 285 Hz, 396 Hz, 417 Hz, 528 Hz, 639 Hz, 741 Hz, 852 Hz, and 963 Hz.
        </p>
        <p className="solfeggio-studio-section-text">
          Verify accuracy using Logic’s Frequency Analyzer, ensuring the peak matches the target (e.g., 528 Hz ± 1 Hz). Alternatively, record physical instruments like tuning forks, positioning the microphone 6-12 inches away and confirming the frequency post-recording.
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Creating Looping Sleep Soundscapes</h2>
        <p className="solfeggio-studio-section-text">
          To create soothing sound clips for sleep, trim each frequency clip to a loopable length (e.g., 10 seconds), ensuring zero-amplitude start and end points. Apply a 50ms fade-in and fade-out to avoid clicks, then loop the clip in Logic Pro X. Layer with ambient sounds (e.g., rain, ocean waves) from Logic’s Loop Library, using EQ to keep the frequency prominent (e.g., boost at 528 Hz). Add a subtle reverb (2-second decay) for a dreamy effect.
        </p>
        <p className="solfeggio-studio-section-text">
          Export as a WAV file (24-bit/192 kHz) for quality, then convert to MP3 (320 kbps) for app integration. Test the loop for 5 minutes to ensure seamless playback, perfect for sleep or meditation in MantraMind.
        </p>
      </section>

      <section className="solfeggio-studio-section">
        <h2 className="solfeggio-studio-section-title">Programmatic Options</h2>
        <p className="solfeggio-studio-section-text">
          Logic Pro X lacks a public API, but you can automate tasks with AppleScript or use tools like Tone.js for programmatic generation. Tone.js allows frequency creation via JavaScript, which can be recorded and imported into Logic Pro X for further editing. This ensures flexibility while maintaining Logic’s high-quality output for your wellness app.
        </p>
      </section>
    </div>
  );
};

export default SolfeggioStudio;