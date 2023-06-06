import React, { useState } from 'react'
import { AddTask } from '../components/AddTask'

export const TaskList: React.FC = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleAddTask = () => {
        setTasks(prevTasks => [...prevTasks, newTask])
        setNewTask('')
    }
    const handleDeleteTask = () => {
        setTasks(prevTasks => prevTasks.filter((_, index) => {
            return index
        }))
    }
  return (
    <div className="flex flex-col items-center">
        <div>
        <AddTask newTask={newTask} handleAddTask={handleAddTask} setNewTask={setNewTask} />
        <div className="border-4 border-blue-950 p-2 rounded-lg bg-blue-500  flex-start items-between text-white font-bold mt-4">
        <ul>
        {tasks.map((task, index) => (
            <>
            <li key={index}>
                <div className="flex justify-between">
                    <span>{task}</span>
                    <input 
                        type="checkbox" 
                        onClick={handleDeleteTask}
                    />
                </div>
            </li>
            </>
        ))}
        </ul>
        </div>
        </div>
            
    </div>
  )
}
