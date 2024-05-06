import { useState } from "react"

export default function State() {
    const [count, setCount] = useState(0);

    function add() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function reduce() {
        const newCount = count - 1;
        setCount(newCount);
    }
    
    return (
        <div style={{ backgroundColor: 'aqua', border: '1px solid red', borderRadius: '20px' }}>
            <p>Count: {count}</p>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}