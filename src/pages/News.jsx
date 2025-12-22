import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css"; // Importing styles

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=disaster OR earthquake OR flood OR hurricane OR wildfire OR storm&apiKey=c30a95413bbb4404a6f2c8cbbc01690e`
        );
        const fetchedArticles = response.data.articles;

        // Filter articles based on relevant keywords (additional filtering)
        const disasterKeywords = ["disaster", "earthquake", "flood", "hurricane", "wildfire", "storm"];
        const disasterRelatedArticles = fetchedArticles.filter((article) => {
          // Check if the title or description contains any of the keywords
          return disasterKeywords.some((keyword) =>
            article.title.toLowerCase().includes(keyword) ||
            (article.description && article.description.toLowerCase().includes(keyword))
          );
        });

        setArticles(fetchedArticles);
        setFilteredArticles(disasterRelatedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>📰 Disaster Related News</h2>
      {filteredArticles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <div className="news-grid">
          {filteredArticles.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
