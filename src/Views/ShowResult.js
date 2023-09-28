import { useRecoilValue } from "recoil";
import { questionsState, correctAnswersState } from "../states/states";
import "./showResult.css";
import "./common.css";
import { Link } from "react-router-dom";

export function ShowResult (){

  const correctAnswers = useRecoilValue(correctAnswersState);
  const questions = useRecoilValue(questionsState);

  return (
    <>
      <div className="navigation-links">
        <Link to="/home" className="back-link text-style"><i className="arrow-left-icon"></i>Back to Start</Link>
        <Link to="/scoreboard" className="back-link text-style">Scoreboard<i className="arrow-right-icon"></i></Link>
      </div>
      <h1 className="score-text">Your Score : {correctAnswers.length}/12</h1>
      <ol className="question-list">
        {questions.map((question, index) => (
          <li key={index} className={`${correctAnswers.includes(index) ? "correct-answer" : "incorrect-answer"}`}>
            {question.question.replace(/&quot;/g, "'").replace(/&ouml;/g, "ö").replace(/&#039;/g, "´").replace(/&oacute;/g,"ó").replace(/&iacute;/g,"í").replace(/&aacute;/g,"á").replace(/&amp;/g,"&").replace(/&prime;/g,"'").replace(/&Prime;/g,"'").replace(/&pi;/g,"π").replace(/&shy;/g,"")}
            <br/>
            <b>Correct answer: {question.correct_answer.replace(/&quot;/g, "'").replace(/&ouml;/g, "ö").replace(/&#039;/g, "´").replace(/&oacute;/g,"ó").replace(/&iacute;/g,"í").replace(/&aacute;/g,"á").replace(/&amp;/g,"&").replace(/&prime;/g,"'").replace(/&Prime;/g,"'").replace(/&pi;/g,"π").replace(/&shy;/g,"")}</b>
          </li>
        ))}
      </ol>
    </>
  );
}