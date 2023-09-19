import "./registerUsername.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameState, usersState } from "../states/states";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { loadUsers } from "../storage/user";

export function RegisterUsername () {

  const [username, setUsername] = useRecoilState(usernameState);
  const [users, setUsers] = useRecoilState(usersState);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [messageAnimate, setMessageAnimate] = useState(false);

  useEffect(() => {
    setUsers(loadUsers);
  }, [loadUsers]);

  const register = (event) => {

    event.preventDefault(); // Förhindra att formuläret skickas automatiskt

    let existing = users.find(all => all.username === username);
    if (existing !== undefined) {
      setMessageAnimate(!messageAnimate);
      setMessage("That username is taken");
    } else if (username === "") {
      setMessageAnimate(!messageAnimate);
      setMessage("Please enter a username")
    } else {
      navigate("/questions");
    }
  };
  
  return (
    <>
      <span className="links">
        <Link to="/home" className="text back-button">
          <i className="arrow-left"></i>Back to Start
        </Link>
      </span>
      <div className="text container">
        <form className="username-form ">
          <label className="title">Enter your username : </label>
          <input
            className="input-field" 
            value ={username}
            onChange={(event) => setUsername(event.target.value)}
            maxLength={10}
            placeholder="max 10 characters"
          />
          <div className="button-container">
            <button 
            onClick={register}
            className="text start-button"
            >Start Quiz</button>
          </div>
          <div className={`message-content ${messageAnimate ? "message-animation" : ""}`}>
            {message}
          </div>
        </form>
      </div>
    </>
  );
}   