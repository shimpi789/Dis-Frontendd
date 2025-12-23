import React from "react";
import { motion } from "framer-motion";
import "./News.css";

const ShimmerCard = () => {
  return (
    <div className="news-card shimmer-card">
      <div className="shimmer-image"></div>

      <div className="news-content">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line desc"></div>
        <div className="shimmer-line desc short"></div>
      </div>
    </div>
  );
};

const ShimmerNews = () => {
  return (
    <div className="news-container">
      <h2>📰 Disaster Related News</h2>

      <div className="news-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ShimmerCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerNews;
