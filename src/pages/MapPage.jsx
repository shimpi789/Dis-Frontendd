import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [userLocation, setUserLocation] = useState([22.5726, 88.3639]); // Default: Kolkata

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  return (
    <div>
      <h1>Live Map</h1>
      <MapContainer center={userLocation} zoom={10} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={userLocation}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;