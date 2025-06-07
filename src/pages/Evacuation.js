import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline, Marker, Popup, CircleMarker } from 'react-leaflet';
import '../styles/Evacuation.css';

// Mock data for evacuation routes and incidents (replace with real API data)
const evacuationData = [
  {
    id: 1,
    city: "New York, NY",
    start: { lat: 40.7128, lng: -74.0060 },
    safeZone: { lat: 40.7589, lng: -73.9851, name: "Bellevue Hospital" },
    route: [
      [40.7128, -74.0060],
      [40.7231, -74.0012],
      [40.7350, -73.9940],
      [40.7484, -73.9878],
      [40.7589, -73.9851],
    ],
    distance: "4.8 miles",
    time: "15 min",
    traffic: "Moderate",
  },
  {
    id: 2,
    city: "Los Angeles, CA",
    start: { lat: 34.0522, lng: -118.2437 },
    safeZone: { lat: 34.0762, lng: -118.2580, name: "Cedars-Sinai Medical Center" },
    route: [
      [34.0522, -118.2437],
      [34.0600, -118.2480],
      [34.0685, -118.2530],
      [34.0762, -118.2580],
    ],
    distance: "3.2 miles",
    time: "10 min",
    traffic: "Light",
  },
  {
    id: 3,
    city: "Chicago, IL",
    start: { lat: 41.8781, lng: -87.6298 },
    safeZone: { lat: 41.8747, lng: -87.6505, name: "Northwestern Memorial Hospital" },
    route: [
      [41.8781, -87.6298],
      [41.8765, -87.6350],
      [41.8750, -87.6400],
      [41.8747, -87.6505],
    ],
    distance: "2.5 miles",
    time: "8 min",
    traffic: "Heavy",
  },
];

const incidentData = [
  { id: 1, city: "New York, NY", lat: 40.7200, lng: -74.0000, type: "Explosion", severity: "High" },
  { id: 2, city: "Los Angeles, CA", lat: 34.0550, lng: -118.2400, type: "Shooting", severity: "Medium" },
  { id: 3, city: "Chicago, IL", lat: 41.8800, lng: -87.6250, type: "Fire", severity: "High" },
];

function Evacuation() {
  return (
    <div className="evacuation-container">
      <h1 className="evacuation-title">Escape Route Planner</h1>
      <p className="evacuation-description">
        Plan safe evacuation routes from high-risk areas to secure locations, optimized for traffic and crowd density, with real-time incident mapping.
      </p>
      <section className="evacuation-section">
        <h2 className="evacuation-section-title">Evacuation Routes</h2>
        <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '400px', width: '100%', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '4px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {evacuationData.map((route) => (
            <React.Fragment key={route.id}>
              <Polyline positions={route.route} color="blue" weight={4} />
              <Marker position={route.start}>
                <Popup>
                  <b>{route.city}</b><br />Starting Point
                </Popup>
              </Marker>
              <Marker position={route.safeZone}>
                <Popup>
                  <b>{route.safeZone.name}</b><br />Safe Zone
                </Popup>
              </Marker>
            </React.Fragment>
          ))}
          {incidentData.map((incident) => (
            <CircleMarker
              key={incident.id}
              center={[incident.lat, incident.lng]}
              radius={8}
              fillColor={incident.severity === 'High' ? '#ff0000' : '#ffa500'}
              color={incident.severity === 'High' ? '#ff0000' : '#ffa500'}
              weight={1}
              opacity={1}
              fillOpacity={0.8}
            >
              <Popup>
                <b>{incident.city}</b><br />
                Incident: {incident.type}<br />
                Severity: {incident.severity}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
        <ul className="evacuation-section-list">
          {evacuationData.map((route) => (
            <li key={route.id}>
              <strong>{route.city} to {route.safeZone.name}:</strong> {route.distance} | Est. Time: {route.time} | Traffic: {route.traffic}
              <Link to="/vulnerability" className="evacuation-section-link"> View Risk Data</Link>
            </li>
          ))}
          {incidentData.map((incident) => (
            <li key={incident.id}>
              <strong>{incident.city} Incident:</strong> {incident.type} | Severity: {incident.severity}
              <Link to="/vulnerability" className="evacuation-section-link"> View Risk Data</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Evacuation;