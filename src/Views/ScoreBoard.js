import { usersState } from "../states/states";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

export function Scoreboard() {

    const [users, setUsers] = useRecoilState(usersState);

    return (
        <div>
            <h1>Top 10 Scores</h1>
            <table>
                <tr>
                    <th>Namn</th>
                    <th>Password</th>
                </tr>
                {users.map((user) => {
                return (
                    <tr>
                    <td>{user.username}</td>
                    <td>{user.score}</td>
                    </tr>
                );
                })}
            </table>
            <Link to="/home">home</Link>
        </div>
    );
}