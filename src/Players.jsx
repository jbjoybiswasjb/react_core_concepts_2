import { useState } from "react";

export default function Players() {

    const playersStyle = {
        backgroundColor: 'purple',
        border: '1px solid blue',
        borderRadius: '1em',
        color: 'white',
        padding: '1em',
        marginBottom: '1em',
    };


    const [players, setPlayers] = useState(0);

    function addPlayers() {
        const newPlayers = players + 1;
        setPlayers(newPlayers);
    }

    const removePlayers = () => {
        const newPlayers = players -1;
        setPlayers(newPlayers);
    }

    return (
        <div style={playersStyle}>
            <p>Players: {players}</p>
            <button onClick={addPlayers}>Add Players</button>
            <button onClick={removePlayers}>Remove Players</button>
        </div>
    )
}