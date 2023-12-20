import React, { useState } from "react";
import "../css/instruction.css";
import { questionList } from "./QuizList";

const Instruction = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState();

  const handleStartQuiz = () => setStartQuiz(true);
  const handleSelectOption = (selectedId) => {
    if (!selectedOption) {
      setSelectedOption(!selectedOption);
      if (selectedId === questionList[questionNumber].answer) {
        setScore((score) => score + 1);
      }
    }
  };
  const updateQuestion = () => {
    if (questionNumber < questionList.length - 1) {
      setQuestionNumber((questionNumber) => questionNumber + 1);
      setSelectedOption(!selectedOption);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {!startQuiz && (
        <div className="instruction">
          <header className="instruction-header">
            <p>Welcome to Quiz</p>
          </header>
          <main className="instruction-main">
            <div className="instruction-points">
              <p>
                This Assessment will contain {questionList.length} questions
                related to React JS
              </p>
              <p> This is a quiz application built using ReactJS.</p>
              <p>
                Currently it's loaded with question from json, but you can
                easily load any type of questions into it.
              </p>
              <p>
                It will dynamically load the question-&gt;answers pair and
                upload them into the components.
              </p>
            </div>
            <button className="start-btn" onClick={handleStartQuiz}>
              Start the Quiz
            </button>
          </main>
        </div>
      )}
      {!showScore && startQuiz && (
        <div className="quiz">
          <div className="quiz-question">
            <p className="quiz-qno">
              {questionNumber + 1}/{questionList.length}
            </p>
            <p>{questionList[questionNumber].question}</p>
          </div>
          <div className="quiz-opt-answer">
            <div className="quiz-options">
              {questionList[questionNumber].options.map((qOpt, qInd) => (
                <div
                  key={qInd}
                  className={
                    qOpt.id === questionList[questionNumber].answer &&
                    selectedOption === true
                      ? "quiz-opt answer"
                      : "quiz-opt"
                  }
                  onClick={() => handleSelectOption(qOpt.id)}
                  style={{
                    border:
                      qOpt.id !== questionList[questionNumber].answer &&
                      selectedOption === true
                        ? "2px solid red"
                        : qOpt.id === questionList[questionNumber].answer &&
                          selectedOption === true
                        ? "2px solid green"
                        : "2px solid rgb(0, 140, 255)",
                  }}
                >
                  <p
                    className={
                      qOpt.id === questionList[questionNumber].answer &&
                      selectedOption === true
                        ? "quiz-qId id-answer"
                        : "quiz-qId"
                    }
                    style={{
                      backgroundColor:
                        qOpt.id !== questionList[questionNumber].answer &&
                        selectedOption === true
                          ? "red"
                          : qOpt.id === questionList[questionNumber].answer &&
                            selectedOption === true
                          ? "green"
                          : "rgb(0, 140, 255)",
                    }}
                  >
                    {qOpt.id}
                  </p>
                  <p
                    className={
                      qOpt.id === questionList[questionNumber].answer &&
                      selectedOption === true
                        ? "quiz-qOpt opt-answer"
                        : "quiz-qOpt"
                    }
                  >
                    {qOpt.opt}
                  </p>
                </div>
              ))}
            </div>
            {selectedOption && (
              <button className="nxt-btn" onClick={updateQuestion}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
      {showScore && (
        <div className="score-container">
          <h1>Quiz Completed</h1>
          <h1>
            Your Score is <span className="score">{score}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Instruction;
