import React from 'react'

export const AddTask = ({newTask, handleAddTask, setNewTask}) => {

  return (
    <div>
        <label>
            New Task:
            <input
                name="task"
                type="text" 
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                className="border-4 border-blue-950 bg-blue-500 rounded-lg m-2 p-1 text-white"
            >
            </input>
        </label>
        <button 
            onClick={handleAddTask}
            className="bg-slate-600 border-2 border-slate-300 hover:bg-slate-700 rounded-md p-3 text-white"

        >Submit</button>
    </div>
  )
}
