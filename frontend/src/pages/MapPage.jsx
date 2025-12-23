import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const disasterIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const disasterZones = [
  {
    id: 1,
    type: "Flood",
    position: [22.585, 88.4],
    description: "Flood-prone area (sample data)",
  },
  {
    id: 2,
    type: "Earthquake",
    position: [22.62, 88.35],
    description: "Seismic activity zone (sample data)",
  },
  {
    id: 3,
    type: "Cyclone",
    position: [22.54, 88.33],
    description: "Cyclone impact zone (sample data)",
  },
];

const MapPage = () => {
  const [userLocation, setUserLocation] = useState([22.5726, 88.3639]);
  const [locationLoaded, setLocationLoaded] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationLoaded(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
        setLocationLoaded(true);
      },
      () => {
        setLocationLoaded(true);
      }
    );
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        background: "#0b0f14",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#f3b400",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        🗺️ Live Map Tracking
      </h2>

      <p
        style={{
          color: "#ccc",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "0.95rem",
        }}
      >
        Shows your current location and nearby disaster-prone zones.
      </p>

      <MapContainer
        center={userLocation}
        zoom={11}
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locationLoaded && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>
              <strong>You are here</strong>
            </Popup>
          </Marker>
        )}

        {disasterZones.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.position}
            icon={disasterIcon}
          >
            <Popup>
              <strong>{zone.type}</strong>
              <br />
              {zone.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
