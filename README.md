```plaintext
mantramind/
├── backend/
│ ├── server.js # Express server for Grok API, Firebase Storage
│ ├── package.json # Backend dependencies (Express, firebase-admin)
│ ├── .env # Backend env vars (GROK_API_KEY, FIREBASE_KEY)
│ └── README.md # Backend setup instructions
├── config/
│ └── serviceAccountKey.json # Firebase service account key
├── public/
│ ├── favicon.ico # Browser tab icon
│ ├── index.html # Root HTML for React app
│ ├── manifest.json # PWA manifest (app name, icons)
│ └── 404.html # Custom 404 page
├── src/
│ ├── components/
│ │ ├── ChatInterface.js # Input/output for mantra/plan generation
│ │ ├── MantraList.js # Lists downloadable mantras/plans
│ │ ├── Header.js # Navigation bar
│ │ └── Footer.js # Footer with links
│ ├── pages/
│ │ ├── Home.js # Main page with ChatInterface
│ │ ├── Mantras.js # Page for MantraList
│ │ └── About.js # App info page
│ ├── services/
│ │ └── aiService.js # Grok API calls for mantra/plan generation
│ ├── styles/
│ │ ├── ChatInterface.css # Chat input/output styles
│ │ ├── MantraList.css # Mantra/plan list styles
│ │ ├── Header.css # Header styles
│ │ ├── Footer.css # Footer styles
│ │ ├── Home.css # Home page styles
│ │ ├── Mantras.css # Mantras page styles
│ │ ├── About.css # About page styles
│ │ └── App.css # Global styles
│ ├── utils/
│ │  ├── downloadTxt.js
│ │  └── downloadAudio.js # New: Download PulseFlow audio files
│ ├── App.js # Main app with routing
│ ├── firebase.js # Firebase config/initialization
│ ├── index.js # React app entry point
│ └── index.css # Global CSS (resets, typography)
├── firestore.rules # Firestore security rules
├── .env # Frontend env vars (Firebase config, GROK_API_KEY)
├── .gitignore # Ignore node_modules, .env
├── package.json # Frontend dependencies (React, firebase)
└── README.md # Project overview, setup guide
```

# MantraMind

**Open-source AI chatbot for generating personalized text mantras and action plans to enhance meditation, therapy, and personal growth, using Grok API, React, Firebase, and GitHub feedback.**
Buddhist-inspired, copyright-safe, complements Monroe Institute’s mission.

---

## Features

- **Mantra Generation**: Crafts mantras (e.g., _“Serenity Lotus, I am at peace”_) from emotions/goals.
- **Action Plans**: 3–5 step plans (e.g., _“Meditate 10 min daily”_) for life improvement.
- **Downloadable Text**: TXT files for mantras/plans via Firebase Storage.
- **Community Feedback**: GitHub for refining mantras/plans (e.g., _“Harmony Wave”_ votes).

---

## Tech Stack

- **Frontend**: React (`ChatInterface.js`, `MantraList.js`)
- **Backend**: Node.js, Firebase (Firestore, Storage)
- **AI**: xAI Grok API (prompt engineering)
- **Community**: GitHub issues

## Role of Generating Mantras/Plans in MantraMind:

- **Process**: AI (Grok API) crafts mantras/plans with semantic resonance (“Serenity” for calm), emotional tone (“Glow” for uplift), Buddhist context (“Lotus” for mindfulness), tailored specificity (work stress focus).
- **Impact**: Personalized, actionable text (e.g., “Serenity Glow, I am strong”; “Meditate 10 min”) boosts meditation/therapy, accessible.
- **Integration**: ChatInterface.js inputs emotions (e.g., “Stressed”), displays mantra/plan, downloads TXT (Firebase). MantraList.js lists community outputs, GitHub refines. Embedding semantic resonance, emotional tone, Buddhist context, and tailored specificity.
- **Why**: Delivers meaningful, copyright-safe (no Hemi-Sync/Gateway IP) mantras/plans, enchanting (Jan 30, 2025), scalable, complements Monroe’s mission.
