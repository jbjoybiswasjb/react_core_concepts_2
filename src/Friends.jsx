import { useEffect, useState } from "react";
import './Friends.css';
import Friend from "./Friend";

export default function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div className="box">
            <p>Friends: {friends.length}</p>

            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}