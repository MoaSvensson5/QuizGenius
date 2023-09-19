import "./scoreboard.css";
import { usersState, usernameState } from "../states/states";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Scoreboard() {

    const username = useRecoilValue(usernameState);
    const [users, setUsers] = useRecoilState(usersState);
    const [usernameExists, setUsernameExists] = useState(false);

    const sortArray = () => {
        const sorted = [...users].sort((a, b) => b.score - a.score);
        return sorted.slice(0, 10);
    }

    const sortedUsers = sortArray();

    useEffect (() => {
        const userExists = sortedUsers.find(user => user.username === username);

        setUsernameExists(userExists);
    }, [username])
   
    return (
        <> 
            <span className="links">
                <Link to="/home" className="text back-button">
                    <i className="arrow-left"></i>Back to Start
                </Link>
            </span>
            {!usernameExists && (
                <p className="text">
                    Sorry, you didn't make it to the top 10. Try again!
                </p>
            )}
            <div className="centered-container text">
                <div className="score-content">
                    <h1 className="title">
                        <span className="star">&#9733;</span>
                        <span className="text">Top 10 Scoreboard</span>
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
                        {sortedUsers.map((user, index) => (
                            <tr key={index} className={user.username === username ? 'highlighted' : ''}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.score}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}