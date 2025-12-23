import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

// logger
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// test route
app.get("/test", (req, res) => {
  res.json({ message: "Test route working ✅" });
});

// news route
app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: "disaster OR earthquake OR flood OR hurricane OR wildfire OR storm",
          language: "en",
          pageSize: 20,
          apiKey: process.env.NEWS_API_KEY,
        },
      }
    );

    res.json(response.data.articles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
