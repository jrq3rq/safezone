import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">SafeZone Response</h1>
      <p className="home-description">
        As of 01:12 PM PDT, Saturday, June 07, 2025, protect communities from mass casualty events with real-time tools to identify risks and respond to threats.
      </p>
      <section className="home-section">
        <h2 className="home-section-title">Key Features</h2>
        <ul className="home-section-list">
          <li>
            <strong>Vulnerability Forecaster:</strong> Interactive heat map identifies high-risk areas using population density, police resources, and training budgets.
            <Link to="/vulnerability" className="home-section-link"> Explore Risks</Link>
          </li>
          <li>
            <strong>Escape Route Planner:</strong> Real-time evacuation routes optimized for traffic and crowd density.
            <Link to="/evacuation" className="home-section-link"> Plan Escape</Link>
          </li>
          <li>
            <strong>Emergency Map:</strong> Live display of incidents, hospitals, responders, and routes.
            <Link to="/evacuation" className="home-section-link"> View Map</Link>
          </li>
          <li>
            <strong>Real-time Alerts:</strong> Instant notifications for incidents and evacuation updates.
            <Link to="/alerts" className="home-section-link"> Stay Informed</Link>
          </li>
        </ul>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Terrorist Attack Context</h2>
        <ul className="home-section-list">
          <li>Swarm Attacks: Coordinated multi-point assaults (e.g., 2008 Mumbai, 2015 Paris) or drone swarms (e.g., 2019 Saudi oil attack) overwhelm defenses. Counter: Surveillance, counter-drone tech, rapid response.</li>
          <li>Multi-Location/City Attacks: Simultaneous strikes (e.g., 2004 Madrid, 2005 London) strain resources. Counter: Intelligence-sharing, rapid task forces.</li>
          <li>Fedayeen Attackers: Sacrificial teams prolong assaults (e.g., 2008 Mumbai, 2013 Nairobi). Counter: Elite units, hardened targets.</li>
          <li>Reducing 2nd/3rd-Order Effects: Mitigate economic loss, panic. Counter: Quick response, clear communication, resilient infrastructure.</li>
          <li>Other Tactics: Lone Actors (e.g., 2025 New Orleans), IEDs, Assassinations/CBRN/Cyber, Hostages (e.g., 2023 Hamas). Counter: Online monitoring, detection, protection, rescue ops.</li>
          <li>Insights: Tech (drones, encryption) aids terrorists; soft targets (concerts) are vulnerable. Use data (e.g., Global Terrorism Database) for prediction, balance security with root-cause fixes.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;