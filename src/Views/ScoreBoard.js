import React, { useEffect, useState } from 'react';

export function Scoreboard() {
    const [topScores, setTopScores] = useState([]);

    useEffect(() => {
        // Hämta alla användare från localStorage och sortera dem efter poäng
        const allUsers = Object.keys(localStorage).map(username => {
            return JSON.parse(localStorage.getItem(username));
        });

        const sortedUsers = allUsers
            .filter(user => user && user.score)
            .sort((a, b) => b.score - a.score);

        // Visa de 10 bästa resultaten
        const top10Scores = sortedUsers.slice(0, 10);
        setTopScores(top10Scores);
    }, []);

    return (
        <div>
            <h1>Top 10 Scores</h1>
            <ul>
                {topScores.map((user, index) => (
                    <li key={index}>
                        {user.username}: {user.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}