import React from 'react'
import { Counter } from "./pages/Counter";
import { TaskList } from "./pages/TaskList";


const App: React.FC = () => {
  return <>
  <div className="space-y-8">
    <Counter />
    <TaskList />
  </div>
  </>
}

export default App;
