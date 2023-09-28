import { useRecoilValue } from "recoil";
import { questionsState, correctAnswersState } from "../states/states";
import "./showResult.css";
import "./common.css";
import { Link } from "react-router-dom";
import { ConvertHtmlToText } from "../utils/utils";

export function ShowResult() {
  const correctAnswers = useRecoilValue(correctAnswersState);
  const questions = useRecoilValue(questionsState);

  return (
    <>
      <div className="navigation-links">
        <Link to="/home" className="back-link text-style">
          <i className="arrow-left-icon"></i>Back to Start
        </Link>
        <Link to="/scoreboard" className="back-link text-style">
          Scoreboard<i className="arrow-right-icon"></i>
        </Link>
      </div>
      <h1 className="score-text">Your Score : {correctAnswers.length}/12</h1>
      <ol className="question-list">
        {questions.map((question, index) => (
          <li
            key={index}
            className={`${
              correctAnswers.includes(index)
                ? "correct-answer"
                : "incorrect-answer"
            }`}
          >
            {ConvertHtmlToText(question.question)}
            <br />
            <b>Correct answer: {ConvertHtmlToText(question.correct_answer)}</b>
          </li>
        ))}
      </ol>
    </>
  );
}
