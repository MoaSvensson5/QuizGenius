import { useRecoilValue } from "recoil";
import { questionsState, correctAnswersState } from "../states/states";
import "./showResult.css";
import { Link } from "react-router-dom";

export function ShowResult (){

    const correctAnswers = useRecoilValue(correctAnswersState);
    const questions = useRecoilValue(questionsState);

    return (
        <div>
            <h1 className="score">Your Score : {correctAnswers.length}/12</h1>
            <ol className="question-list">
                {questions.map((question, index) => (
                    <li key={index} className={`${correctAnswers.includes(index) ? "correct-answer" : "incorrect-answer"}`}>
                        {question.question} <br />
                        <b>Correct answer: {question.correct_answer}</b>
                    </li>
                ))}
            </ol>
            <Link to="/home">*</Link>
        </div>
    );
}