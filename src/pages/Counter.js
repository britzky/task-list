import React, { useState } from "react"


export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col items-center border-8 border-blue-950 p-2 rounded-lg bg-blue-500 text-white">
            <h1 className="font-bold">Counter</h1>
            <span>{count}</span>   
            <div className="flex gap-4">
                <button onClick={handleIncrement} className="hover:bg-slate-700 bg-slate-600 border-2 border-slate-300 rounded-md p-3">+</button>
                <button onClick={handleDecrement} className="hover:bg-slate-700 bg-slate-600 border-2 border-slate-300 rounded-md p-3">-</button>
            </div>     
        </div>
    </div>
  )
}
