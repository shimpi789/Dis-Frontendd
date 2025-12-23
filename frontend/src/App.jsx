import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MapPage from "./pages/MapPage";
import News from "./pages/News";
import Guidelines from "./pages/Guidelines"; // Import Guidelines
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/guidelines" element={<Guidelines />} /> {/* Add Guidelines Route */}
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
