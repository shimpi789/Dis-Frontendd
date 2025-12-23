import React, { useState } from "react";
import "../pages/Quiz.css"; // Make sure to create a CSS file for styling

const quizData = [
  {
    question: "What should you do during an earthquake?",
    options: [
      "Stand under a tree",
      "Take cover under a table",
      "Run outside immediately",
      "Stay near windows",
    ],
    correct: 1,
  },
  {
    question: "Which is the safest place during a flood?",
    options: ["A basement", "A hill or high ground", "A tunnel", "Near a river"],
    correct: 1,
  },
  {
    question: "How do you protect yourself from a wildfire?",
    options: ["Stay near trees", "Wet your clothes and evacuate", "Drive towards the fire", "Ignore it"],
    correct: 1,
  },
  {
    question: "What is the best way to prepare for a hurricane?",
    options: ["Wait until the storm arrives", "Stock up on food & emergency kits", "Go to the beach", "Ignore warnings"],
    correct: 1,
  }
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      if (index === quizData[currentQuestion].correct) {
        setScore(score + 1);
      }
      setTimeout(() => {
        if (currentQuestion + 1 < quizData.length) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          setQuizCompleted(true);
        }
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <h2>{quizData[currentQuestion].question}</h2>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedAnswer !== null
                    ? index === quizData[currentQuestion].correct
                      ? "correct"
                      : index === selectedAnswer
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>
        </>
      ) : (
        <div className="quiz-complete">
          <h2>Quiz Completed! 🎉</h2>
          <p>Your Score: {score} / {quizData.length}</p>
          <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;