import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [22.5726, 88.3639]; // Example: Kolkata

const MapComponent = () => {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      {/* OpenStreetMap Tiles */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Marker */}
      <Marker position={center}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;