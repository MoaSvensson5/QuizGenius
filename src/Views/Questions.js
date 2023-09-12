import { useState, useEffect } from 'react';
import { Button, shuffleArray } from '../constants/constants';
import { useRecoilState } from "recoil";
import { categoryState } from "../states/states";
import { Navigate } from 'react-router-dom';

export function RenderQuestions () {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [correctAnswers, setcorrectAnswers] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(5);

    const [category, setCategory] = useRecoilState(categoryState);

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
                });
    }, [category]);

    console.log(questions)

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        // Decrement timer every second
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);
    
        // Clear timer and move to the next question when time runs out
        if (timeRemaining === 0) {
            clearInterval(timer);
            handleNextQuestion();
        }
    
        // Clean up the timer when the question changes
        return () => {
            clearInterval(timer);
        };
    }, [timeRemaining]);

    const handleNextQuestion = (selectedAnswer, questionIndex) => {

        setTimeRemaining(5);

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

    return(
        <div>
            <div className="question-page">
                {currentQuestion ? (
                    quizCompleted ? (
                        <Navigate to="/result"/>
                    ):(
                    <div>
                        <div>
                            <div className="question-title">Question {currentQuestionIndex + 1}/12</div>
                            <div className="text">{currentQuestion.question}</div>
                        </div>
                        <div>
                            {currentQuestion.shuffledAnswers.map((answer, questionIndex) => (
                                <Button
                                    key={questionIndex}
                                    onClick={() => handleNextQuestion(answer, questionIndex)}
                                    title={answer}
                                />
                            ))}
                        </div>
                        <div>{timeRemaining}</div>
                    </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}