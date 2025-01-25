import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount((prev) => prev + 1)
        // setCount(count+1)
    }
    function decrement() {
        if (count > 0) {
            setCount((prev) => prev - 1)
            // setCount(count-1)
        }
    }
    return (
        <>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
