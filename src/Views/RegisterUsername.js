import "./registerUsername.css";
import { useRecoilState } from "recoil";
import { usernameState, usersState } from "../states/states";
import { useNavigate } from "react-router-dom";
import "./questions.css";
import { useState, useEffect } from 'react';
import { loadUsers } from "../storage/user";

export function RegisterUsername () {

  const [username, setUsername] = useRecoilState(usernameState);
  const [users, setUsers] = useRecoilState(usersState);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  useEffect(() => {
    setUsers(loadUsers);
  }, [loadUsers]);

  const register = (event) => {

    event.preventDefault(); // Förhindra att formuläret skickas automatiskt

    let existing = users.find(all => all.username === username);
    if (existing !== undefined) {
      setMessage("");
      setMessage("That username is taken");
    } else if (username === "") {
      setMessage("");
      setMessage("Please enter a username")
    } else {
      navigate("/questions");
    }
  };

  return (
    <>
      <div className="content username-form text">
        <form className="">
          <label>Enter your username : </label>
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
            className="text"
            >Start Quiz</button>
          </div>
          {message}
        </form>
      </div>
    </>
  );
}   