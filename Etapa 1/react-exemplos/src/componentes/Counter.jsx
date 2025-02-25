import React from "react"
import '../App.css'
import { useState } from 'react'

function Counter(title, inicial = 0) {
    const [count, setCount] = useState(Number(inicial));

    return (
        <>
        <h1>{title}</h1>

          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </>
      );
    }
    
export default Counter