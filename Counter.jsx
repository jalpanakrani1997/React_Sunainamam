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

// import React, { useRef, useState } from 'react'

// export default function Timer() {
//     const [count, setCounter] = useState(0)

//     var id = useRef(null);
//     console.log(id)
//     function start() {
//         id.current = setInterval(() => {
//             setCounter((prev) => prev + 1)
//             console.log(id.current)
//         }, 1000)
//     }
//     function stop() {
//         clearInterval(id.current)
//     }
//     return (
//         <>
//             <div>{count}</div>
//             <button onClick={start}>start</button>
//             <button onClick={stop}>stop</button>
//         </>
//     )
// }
