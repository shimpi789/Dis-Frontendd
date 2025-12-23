import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ShimmerNews from "./ShimmerNews";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/news");

        const disasterKeywords = [
          "disaster",
          "earthquake",
          "flood",
          "hurricane",
          "wildfire",
          "storm",
        ];

        const filtered = response.data.filter((article) => {
          const title = article.title?.toLowerCase() || "";
          const desc = article.description?.toLowerCase() || "";

          return disasterKeywords.some(
            (keyword) => title.includes(keyword) || desc.includes(keyword)
          );
        });

        setArticles(filtered);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Unable to load news at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <ShimmerNews />;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="news-container">
      <h2>📰 Disaster Related News</h2>

      {articles.length === 0 ? (
        <p>No disaster-related news found.</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="news-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title || "News image"}
                />
              )}

              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
