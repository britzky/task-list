import { Counter } from "./pages/Counter";
import { TaskList } from "./pages/TaskList";


function App() {
  return <>
  <div className="space-y-8">
    <Counter />
    <TaskList />
  </div>
  </>
}

export default App;
