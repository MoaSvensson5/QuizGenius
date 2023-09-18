import { useRecoilState } from "recoil";
import { usernameState, usersState } from "../states/states";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SetUpUser () {

  const [username, setUsername] = useRecoilState(usernameState);
  const [users, setUsers] = useRecoilState(usersState);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const register = (event) => {

    event.preventDefault(); // Förhindra att formuläret skickas automatiskt

    let existing = users.find(all => all.username === username);
    if (existing !== undefined) {
      setMessage("That username is taken");
    } else {
      navigate("/questions");
    }
  };

  return (
    <>
      <form>
        <label>Username</label>
        <input 
          value ={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={register}>Add username</button>
        {message}
      </form>
    </>
  );
}   