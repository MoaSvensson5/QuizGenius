import "./questions.css";
import { useState, useEffect } from 'react';
import { Button, shuffleArray, getCategoryClass, User } from '../constants/constants';
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, questionsState, correctAnswersState, usernameState, usersState } from "../states/states";
import { Navigate } from 'react-router-dom';
import { saveUsers } from "../storage/user";

export function RenderQuestions () {
    const [questions, setQuestions] = useRecoilState(questionsState);
    const [correctAnswers, setcorrectAnswers] = useRecoilState(correctAnswersState);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(100);

    const category = useRecoilValue(categoryState);
    const categoryClass = getCategoryClass(category);
    const username = useRecoilValue(usernameState);

    const [users, setUsers] = useRecoilState(usersState);

    useEffect(() => {

            fetch(`https://opentdb.com/api.php?amount=12&category=${category}&type=multiple`)
                .then(response => response.json())
                .then(data => {
                    const shuffledQuestions = data.results.map((question) => {
                        const allAnswers = [...question.incorrect_answers, question.correct_answer];
                        const shuffledAnswers = shuffleArray(allAnswers);
                        return {
                            ...question,
                            shuffledAnswers,
                        };
                        
                    });
                    setQuestions(shuffledQuestions);
                    setcorrectAnswers([]);
                });
    }, [category]);

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {

        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
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

        setTimeRemaining(100);

        if (currentQuestionIndex < questions.length - 1) {
            if (selectedAnswer === currentQuestion.correct_answer) {
                setcorrectAnswers(prevCorrectAnswers => [...prevCorrectAnswers, questionIndex]);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            if (selectedAnswer === currentQuestion.correct_answer) {
                setcorrectAnswers(prevCorrectAnswers => [...prevCorrectAnswers, questionIndex]);
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
            console.log(value);
        }
    }, [quizCompleted, correctAnswers, username]);

    

    return(
        <div>
            {currentQuestion ? (
                quizCompleted ? (
                    <Navigate to="/result"/>
                ):(
                <div>
                    <div>
                        <div className="question-title">Question {currentQuestionIndex + 1}/12</div>
                        <div className="question text">{currentQuestion.question}</div>
                    </div>
                    <div className="container">
                        <div className="answers-container">
                            {currentQuestion.shuffledAnswers.map((answer, questionIndex) => (
                                <Button
                                    className={`answers-buttons text ${categoryClass}`}
                                    key={questionIndex}
                                    onClick={() => handleNextQuestion(answer, currentQuestionIndex)}
                                    title={answer}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="time-container">{timeRemaining}</div>
                </div>
                )
            ) : (
                <div>Loading...</div>
            )}
    </div>
    )
}