import "./registerUsername.css";
import "./common.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameState, usersState } from "../states/states";
import { useState, useEffect } from 'react';
import { loadUsers } from "../storage/user";
import { Button } from '../constants/constants';

export function RegisterUsername () {

  const [username, setUsername] = useRecoilState(usernameState);
  const [users, setUsers] = useRecoilState(usersState);
  const [message, setMessage] = useState("");
  const [messageAnimate, setMessageAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(loadUsers);
  }, [loadUsers]);

  const register = (event) => {

    event.preventDefault();

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
      <span className="navigation-links">
        <Link to="/home" className="text-style back-link">
          <i className="arrow-left-icon"></i>Back to Start
        </Link>
      </span>
      <div className="text-style username-container">
        <form className="username-form ">
          <label className="form-title">Enter your username : </label>
          <input
            className="username-input-field" 
            value ={username}
            onChange={(event) => setUsername(event.target.value)}
            maxLength={10}
            placeholder="max 10 characters"
          />
          <div className="button-container">
            <Button 
            onClick={register}
            className={"text-style start-quiz-button"}
            title={'Start Quiz'}
            />
          </div>
          <div className={`message-content ${messageAnimate ? "message-animation-true" : "message-animation-false"}`}>
            {message}
          </div>
        </form>
      </div>
    </>
  );
}   