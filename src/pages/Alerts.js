import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Alerts.css';

// Mock data for real-time alerts (replace with real API data)
const mockAlerts = [
  { id: 1, city: "New York, NY", time: "01:30 AM PDT, Jun 07, 2025", type: "Explosion", severity: "High", location: { lat: 40.7200, lng: -74.0000 }, message: "Major explosion reported, evacuate immediately." },
  { id: 2, city: "Los Angeles, CA", time: "01:15 AM PDT, Jun 07, 2025", type: "Shooting", severity: "Medium", location: { lat: 34.0550, lng: -118.2400 }, message: "Active shooter alert, seek shelter." },
  { id: 3, city: "Chicago, IL", time: "01:00 AM PDT, Jun 07, 2025", type: "Fire", severity: "High", location: { lat: 41.8800, lng: -87.6250 }, message: "Large fire spreading, avoid area." },
  { id: 4, city: "Houston, TX", time: "12:45 AM PDT, Jun 07, 2025", type: "Flood", severity: "Medium", location: { lat: 29.7604, lng: -95.3698 }, message: "Flash flood warning, move to higher ground." },
];

function Alerts() {
  const [alerts, setAlerts] = useState(mockAlerts);

  // Simulate real-time updates (e.g., new alert every 30 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        city: "San Francisco, CA",
        time: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: true, month: 'short', day: '2-digit', year: 'numeric' }).replace(/,/, ''),
        type: "Earthquake",
        severity: "High",
        location: { lat: 37.7749, lng: -122.4194 },
        message: "Minor earthquake detected, assess safety.",
      };
      setAlerts((prevAlerts) => [newAlert, ...prevAlerts.slice(0, 3)]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alerts-container">
      <h1 className="alerts-title">Real-time Alerts</h1>
      <p className="alerts-description">
        Stay informed with instant updates on nearby incidents and evacuation needs in vulnerable areas.
      </p>
      <section className="alerts-section">
        <h2 className="alerts-section-title">Active Alerts</h2>
        <ul className="alerts-section-list">
          {alerts.map((alert) => (
            <li key={alert.id}>
              <strong>{alert.city} - {alert.type}:</strong> {alert.time} | Severity: {alert.severity} | {alert.message}
              <Link to="/evacuation" className="alerts-section-link"> Plan Evacuation</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Alerts;