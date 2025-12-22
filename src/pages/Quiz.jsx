import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: "What is the most common natural disaster worldwide?",
      options: ["Earthquakes", "Floods", "Wildfires", "Hurricanes"],
      answer: "Floods",
    },
    {
      question: "Which organization is responsible for monitoring earthquakes globally?",
      options: ["NASA", "FEMA", "United Nations", "USGS"],
      answer: "USGS",
    },
    {
      question: "What should you do first during an earthquake?",
      options: ["Run outside", "Take cover under sturdy furniture", "Stand near windows", "Use an elevator"],
      answer: "Take cover under sturdy furniture",
    },
    {
      question: "What does the color red indicate on a weather hazard map?",
      options: ["Low risk", "Medium risk", "High risk", "No risk"],
      answer: "High risk",
    },
    {
      question: "Which disaster preparedness item is essential in an emergency kit?",
      options: ["Flashlight & batteries", "Television", "Laptop", "Hairdryer"],
      answer: "Flashlight & batteries",
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Disaster Awareness Quiz</h1>

      {!showResult ? (
        <div style={styles.quizBox}>
          <h2 style={styles.question}>{questions[currentQuestion].question}</h2>
          <div style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedOption
                      ? option === questions[currentQuestion].answer
                        ? "#4CAF50" // Green for correct answer
                        : option === selectedOption
                        ? "#FF4C4C" // Red for wrong answer
                        : "#222"
                      : "#222"
                }}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNext} style={styles.nextButton} disabled={!selectedOption}>
            {currentQuestion + 1 < questions.length ? "Next" : "Show Result"}
          </button>
        </div>
      ) : (
        <div style={styles.resultBox}>
          <h2>Your Score: {score} / {questions.length}</h2>
          <p style={styles.resultText}>{score >= 3 ? "Great job! 🎉" : "Keep learning! 🔥"}</p>
          <button onClick={() => window.location.reload()} style={styles.retryButton}>Retry</button>
        </div>
      )}
    </div>
  );
};

// Dark theme styles
const styles = {
  container: {
    backgroundColor: "#111",
    color: "#FFD700",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#FFA500",
  },
  quizBox: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.5)",
    textAlign: "center",
    width: "60%",
  },
  question: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  optionButton: {
    padding: "12px",
    margin: "10px 0",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
    color: "#FFD700",
    backgroundColor: "#222",
    width: "100%",
  },
  nextButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#FFA500",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#111",
  },
  resultBox: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.5)",
    textAlign: "center",
    width: "60%",
  },
  resultText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#FFA500",
  },
  retryButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#FF4C4C",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#FFF",
  },
};

export default Quiz;