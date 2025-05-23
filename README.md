```plaintext
mantramind/
├── backend/
│   ├── server.js # Express server for Firebase Storage, audio uploads
│   ├── package.json # Backend dependencies (Express, firebase-admin, multer)
│   ├── .env # Backend env vars (FIREBASE_KEY, STORAGE_BUCKET)
│   └── README.md # Backend setup instructions
├── config/
│   └── serviceAccountKey.json # Firebase service account key
├── public/
│   ├── favicon.ico # Browser tab icon
│   ├── index.html # Root HTML for React app
│   ├── manifest.json # PWA manifest (app name, icons)
│   ├── audio/ # PulseFlow session audio files (e.g., ps1-session.mp3)
│   └── 404.html # Custom 404 page
├── src/
│   ├── components/
│   │   ├── Header.js # Responsive navigation with hamburger menu sidebar
│   │   ├── Footer.js # Footer with links
│   │   └── AudioPlayer.js # Plays PulseFlow audio sessions
│   ├── pages/
│   │   ├── Home.js # Main page introducing PulseFlow Journey
│   │   ├── PulseFlow.js # Guided audio sessions for Pulse States
│   │   ├── SolfeggioStudio.js # Solfeggio frequency enhancements
│   │   ├── Frequencies.js # Solfeggio frequency details
│   │   ├── ChakraChants.js # Seed Mantra enhancements
│   │   └── About.js # App info page
│   ├── services/
│   │   └── audioService.js # Firebase Storage audio upload/download
│   ├── styles/
│   │   ├── Header.css # Navbar and sidebar styles
│   │   ├── Footer.css # Footer styles
│   │   ├── Home.css # Home page styles
│   │   ├── PulseFlow.css # PulseFlow page styles
│   │   ├── SolfeggioStudio.css # Solfeggio page styles
│   │   ├── Frequencies.css # Frequencies page styles
│   │   ├── ChakraChants.css # Chakra page styles
│   │   ├── AudioPlayer.css # Audio player styles
│   │   ├── About.css # About page styles
│   │   └── App.css # Global styles
│   ├── utils/
│   │   └── downloadAudio.js # Download PulseFlow audio files
│   ├── App.js # Main app with routing
│   ├── firebase.js # Firebase config/initialization
│   ├── index.js # React app entry point
│   └── index.css # Global CSS (resets, typography)
├── firestore.rules # Firestore security rules
├── storage.rules # Firebase Storage security rules for audio
├── .env # Frontend env vars (Firebase config, STORAGE_BUCKET)
├── .gitignore # Ignore node_modules, .env
├── package.json # Frontend dependencies (React, firebase, react-h5-audio-player, react-icons)
└── README.md # Project overview, setup guide
```

# MantraMind

**Open-source meditation platform for guided audio sessions, enhancing relaxation, intuition, and spiritual growth through PulseFlow Journey, using React, Firebase, and GitHub feedback.**  Buddhist-inspired, copyright-safe, complements Monroe Institute’s mission.

---

## Features

- **PulseFlow Journey**: Guided meditation system using CoreSync Tones (pulsing binaural beats, e.g., 120 Hz/126 Hz) and soundscapes (wind, chimes) to achieve Pulse States (PS1–PS5) for relaxation, intuition, and spiritual unity. Includes audio sessions with Energy Weave (distraction visualization), syncopated breathing (4s inhale, 6s exhale, ‘hmmm’), and mantra (“I am boundless, flowing with universal rhythms, guided by inner light, safe”).
- **Solfeggio and Chakra Enhancements**: Integrates Solfeggio frequencies (e.g., 528 Hz for emotional clarity) and Seed Mantras (e.g., LAM for grounding) to enhance PulseFlow sessions, accessible via curated audio tracks or user-generated tones.
- **Responsive Navigation**: Elegant navbar (Georgia font, #f5f5f5) with smooth Framer Motion transitions, transforming into a hamburger menu sidebar on mobile (≤768px) with fade-and-slide animation (0.3s, cubic-bezier). Borderless design for all buttons, ensuring a clean, modern look.
- **Downloadable Audio**: PulseFlow session audio files (e.g., ps1-session.mp3) downloadable via Firebase Storage, supporting offline meditation.
- **Community Feedback**: GitHub for refining PulseFlow sessions, Solfeggio integrations, and UI/UX (e.g., voting on new Pulse States or soundscapes).

---

## Tech Stack

- **Frontend**: React (`Header.js`, `PulseFlow.js`, `AudioPlayer.js`, `SolfeggioStudio.js`, `ChakraChants.js`, `Frequencies.js`)
- **Backend**: Node.js, Firebase (Storage, Firestore)
- **Media**: Audio processing (Audacity for CoreSync Tones, wind/chimes soundscapes)
- **Community**: GitHub issues

## Role of PulseFlow Journey in MantraMind:

- **Process**: Crafts guided audio sessions using CoreSync Tones (pulsing binaural beats, e.g., 120 Hz/126 Hz) and soundscapes (wind, chimes), paired with Energy Weave (visualizing distractions), syncopated breathing (4s inhale, 6s exhale, ‘hmmm’), and a Buddhist-inspired mantra (“I am boundless, flowing with universal rhythms, guided by inner light, safe”) to achieve Pulse States (PS1–PS5) for relaxation, intuition, and spiritual unity.
- **Impact**: Personalized, immersive audio experiences boost meditation, emotional clarity, and spiritual growth, accessible via web or downloadable files, enhancing user well-being.
- **Integration**: PulseFlow.js delivers audio sessions with AudioPlayer.js, supporting Solfeggio frequencies (e.g., 528 Hz) and Seed Mantras (e.g., LAM) from SolfeggioStudio.js and ChakraChants.js. Firebase Storage enables audio downloads, and GitHub refines sessions and UI/UX. Responsive navigation (Header.js) with a hamburger menu sidebar ensures seamless access.
- **Why**: Delivers meaningful, copyright-safe (no Hemi-Sync/Gateway IP) meditation experiences, scalable, complements Monroe’s mission of consciousness expansion.