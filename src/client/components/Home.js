import React from 'react'

export default function Home() {
    // const [count, setCount] = useState(0);
    return (
        <div>
            <div>I am the Home component</div>
            <button onClick={() => console.log("Hello")}>Increment</button>
        </div>
    )
}
