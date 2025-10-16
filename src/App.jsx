  import TaskForm from "./Components/TaskForm"
  import Tasklist from "./Components/Tasklist"
  import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

  function App() {
    const[tasks, setTasks] = useState([]);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    });

    const addTask = (task) => {
      setTasks(...tasks,task);
    }
    return(
      <div>
        <h1>Task List</h1>
        <p>Our friendly Task Manager</p>
        <TaskForm addTask = {addTask}/>
        <Tasklist/>
        <Progresstracker/>
        <button>Clear All Tasks</button>
      </div>
    )
  }
  export default App; 

