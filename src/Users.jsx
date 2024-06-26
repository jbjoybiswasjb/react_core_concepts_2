import { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [])

    return (
        <div>
            <p>Users: {users.length}</p>
        </div>
    )
}