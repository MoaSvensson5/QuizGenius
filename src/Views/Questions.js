import "./questions.css";
import "./common.css";
import { useState, useEffect } from "react";
import { Button, getCategoryClass, ConvertHtmlToText, User } from "../utils/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryState,
  questionsState,
  correctAnswersState,
  usernameState,
  usersState
} from "../states/states";
import { Navigate } from "react-router-dom";
import { saveUsers } from "../storage/user";

export function RenderQuestions() {
  const questions = useRecoilValue(questionsState);
  const [correctAnswers, setCorrectAnswers] = useRecoilState(correctAnswersState);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const category = useRecoilValue(categoryState);
  const categoryClass = getCategoryClass(category);
  const username = useRecoilValue(usernameState);
  const [users, setUsers] = useRecoilState(usersState);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timer);
      handleNextQuestion();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);

  const handleNextQuestion = (selectedAnswer, questionIndex) => {
    setTimeRemaining(15);

    if (currentQuestionIndex < questions.length - 1) {
      if (selectedAnswer === ConvertHtmlToText(currentQuestion.correct_answer)) {
        setCorrectAnswers((prevCorrectAnswers) => [
          ...prevCorrectAnswers,
          questionIndex
        ]);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (selectedAnswer === ConvertHtmlToText(currentQuestion.correct_answer)) {
        setCorrectAnswers((prevCorrectAnswers) => [
          ...prevCorrectAnswers,
          questionIndex
        ]);
      }
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (quizCompleted) {
      let score = correctAnswers.length;
      let value = [...users, new User(username, score)];
      saveUsers(value);
      setUsers(value);
    }
  }, [quizCompleted, correctAnswers, username]);

  return (
    <>
      {currentQuestion ? (
        quizCompleted ? (
          <Navigate to="/result" />
        ) : (
          <div>
            <div>
              <div className="question-title">
                Question {currentQuestionIndex + 1}/12
              </div>
              <div className="text-style">{ConvertHtmlToText(currentQuestion.question)}</div>
            </div>
            <div className="container">
              <div className="answers-container">
                {currentQuestion.shuffledAnswers.map(
                  (answer, questionIndex) => (
                    <Button
                      className={`answers-button text-style ${categoryClass}`}
                      key={questionIndex}
                      onClick={() =>
                        handleNextQuestion(answer, currentQuestionIndex)
                      }
                      title={ConvertHtmlToText(answer)}
                    />
                  )
                )}
              </div>
            </div>
            <div className="text-style time-remaining">{timeRemaining}</div>
          </div>
        )
      ) : (
        <div className="text-style loading-text">Loading...</div>
      )}
    </>
  );
}
