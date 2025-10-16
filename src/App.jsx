  import TaskForm from "./Components/TaskForm"
  import Tasklist from "./Components/Tasklist"
  import Progresstracker from "./Components/Progresstracker"

  function App() {
    return(
      <div>
        <h1>Task List</h1>
        <p>Our friendly Task Manager</p>
        <TaskForm/>
        <Tasklist/>
        <Progresstracker/>
        <button>Clear All Tasks</button>
      </div>
    )
  }
  export default App; 

