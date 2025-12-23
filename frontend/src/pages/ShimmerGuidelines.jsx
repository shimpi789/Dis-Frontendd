import React from "react";
import { motion } from "framer-motion";
import "./Guidelines.css";

const ShimmerGuidelineItem = () => {
  return (
    <div className="guideline-item shimmer-card">
      <div className="shimmer-line title"></div>
      <div className="shimmer-line desc"></div>
      <div className="shimmer-line desc"></div>
      <div className="shimmer-line desc short"></div>
    </div>
  );
};

const ShimmerGuidelines = () => {
  return (
    <div className="guidelines-container">
      <h2 className="guidelines-heading">Disaster Management Guidelines</h2>

      <div className="guidelines-list">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ShimmerGuidelineItem />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerGuidelines;
