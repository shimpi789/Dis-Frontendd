import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShimmerGuidelines from "./ShimmerGuidelines";
import "./Guidelines.css";

const Guidelines = () => {
  const [loading, setLoading] = useState(true);

  // simulate loading (API / heavy content)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ShimmerGuidelines />;

  return (
    <div className="guidelines-container">
      <h2 className="guidelines-heading">Disaster Management Guidelines</h2>

      <div className="guidelines-list">
        {guidelinesData.map((item, index) => (
          <motion.div
            key={index}
            className="guideline-item"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{item.title}</h3>

            <p><strong>During:</strong></p>
            <p>
              {item.during.map((d, i) => (
                <span key={i}>- {d}<br /></span>
              ))}
            </p>

            <p><strong>Preventive Measures:</strong></p>
            <p>
              {item.preventive.map((p, i) => (
                <span key={i}>- {p}<br /></span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;

/* ------------ DATA (same content, cleaner) ------------ */

const guidelinesData = [
  {
    title: "Earthquake",
    during: [
      "Drop, cover, and hold on",
      "Stay indoors until the shaking stops",
      "Move away from windows and heavy furniture",
    ],
    preventive: [
      "Secure heavy furniture",
      "Practice earthquake drills",
      "Know safe spots indoors",
    ],
  },
  {
    title: "Flood",
    during: [
      "Move to higher ground immediately",
      "Avoid floodwaters",
      "Stay away from power lines",
    ],
    preventive: [
      "Build on higher ground",
      "Install flood alarms",
      "Create an evacuation plan",
    ],
  },
  {
    title: "Fire",
    during: [
      "Get low to avoid smoke",
      "Stop, drop, and roll",
      "Call emergency services",
    ],
    preventive: [
      "Install smoke alarms",
      "Keep fire extinguishers",
      "Teach fire safety",
    ],
  },
  {
    title: "Tsunami",
    during: [
      "Move inland immediately",
      "Follow emergency alerts",
      "Avoid coastal areas",
    ],
    preventive: [
      "Know evacuation routes",
      "Avoid coastal construction",
      "Join preparedness drills",
    ],
  },
  {
    title: "Hurricane",
    during: [
      "Secure home and windows",
      "Evacuate if instructed",
      "Stay indoors",
    ],
    preventive: [
      "Install storm shutters",
      "Keep emergency supplies",
      "Monitor weather reports",
    ],
  },
];
