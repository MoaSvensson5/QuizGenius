import "./scoreboard.css";
import "./common.css";
import { usersState, usernameState } from "../states/states";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Scoreboard() {

  const username = useRecoilValue(usernameState);
  const users= useRecoilValue(usersState);
  const [usernameExists, setUsernameExists] = useState(false);
    
  const sortArray = () => {
    const sorted = [...users].sort((a, b) => b.score - a.score);
    return sorted.slice(0, 10);
  }
    
  const sortedUsers = sortArray(users);

  useEffect (() => {
    const userExists = sortedUsers.find(user => user.username === username);
     setUsernameExists(userExists);
  }, [username])

  function getRankSuffix(rank) {
    const lastDigit = rank % 10;
    if (lastDigit === 1) {
      return "st";
    } else if (lastDigit === 2) {
      return "nd";
    } else if (lastDigit === 3) {
      return "rd";
    } else {
      return "th";
    }
  }
  
  return (
    <> 
      <span className="navigation-links">
        <Link to="/home" className="text-style back-link">
          <i className="arrow-left-icon"></i>Back to Start
        </Link>
      </span>
      {!usernameExists && (
        <p className="text-style">Sorry, you didn't make it to the top 10. Try again!</p>
      )}
      <div className="centered-container text-style">
        <div className="score-content">
          <h1 className="scoreboard-title">
            <span className="star">&#9733;</span>
            <span className="text-style">Top 10 Scoreboard</span>
            <span className="star">&#9733;</span>
          </h1>
          <table>
            <thead>
              <tr>
                <th>RANK</th>
                <th>USERNAME</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
            {sortedUsers.map((sortedUsers, index) => (
              <tr key={index}>
                <td className={sortedUsers.username === username ? 'highlighted-row' : ''}>{index + 1}{getRankSuffix(index + 1)}</td>
                <td className={sortedUsers.username === username ? 'highlighted-row' : ''}>{sortedUsers.username}</td>
                <td className={sortedUsers.username === username ? 'highlighted-row' : ''}>{sortedUsers.score}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </>
  );
}