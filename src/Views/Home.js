import "./home.css";
import"./common.css";
import { Footer } from '../component/footer';
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categoryState, usernameState } from "../states/states";

export function StartView (){

  const [category, setCategory] = useRecoilState(categoryState);
  const [username, setUsername] = useRecoilState(usernameState);

  setUsername("");
    
  return (
    <div className="start-view">
      <h3 className="start-view-title text-style">Welcome to the Quiz Genius Challenge!</h3>
      <p className="start-view-text text-style">Are you ready to put your knowledge to the test? Prepare for an exhilarating journey of brain-teasing questions and rapid decision-making. With only 15 seconds per question, the clock is ticking, and the thrill is on!</p>
      <p className="start-view-text text-style">Choose your battlegorund amoung four captivating subjects: Generel Knowledge, Celebrities, Movies and Math. Each category promises a unique voyage into the realm of facts, entertainment, and numerical challenges. Whether you're a trivia enthusiast, a celebrity aficionado, a movie buff, or a math wizard, there's a thrill awaiting you.</p>
      <p className="start-view-text text-style">Sharpen you wits, trust you instincts, and dive into the excitement. Can you make the right call under the pressure of time? Are you the quiz master you've always believed yourself to be? It's time to find out!</p>
      <p className="start-view-text text-style">Get ready to embark on this exciting journey of knowledge, speed, and discovery. <b>Let the quiz begin!</b></p>
      <div className="start-view-buttons">
        <Link to="/registerusername" className="start-view-button general-knowledge" onClick={() => setCategory('9')}>General Knowledge</Link>
        <Link to="/registerusername" className="start-view-button celebrities" onClick={() => setCategory('26')}>Celebrities</Link>
        <br></br>
        <Link to="/registerusername" className="start-view-button movies" onClick={() => setCategory('11')}>Movies</Link>
        <Link to="/registerusername" className="start-view-button math" onClick={() => setCategory('19')}>Math</Link>
      </div>
      <Footer />
    </div>
  )
}