import { useState } from "react"

export default function TaskForm({addTask}) {
    const[task, setTask] = useState('');    
    const[priority, setPriority] = useState('medium');
    const[category, setCategory] = useState('general'); 
    
    const handlesubmit = (e) => {
        e.preventDefalut();
        addTask({text: task, priority, category, complete: false});

        setTask('');
        setPriority('medium');
        setCategory('general');
    }
    return(
        <form>
            <div onSubmit={handlesubmit} value={task}>
                <input type="text" placeholder="Enter the task" 
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
            </div>
            <div>
                <select value={setPriority}onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select value= {setCategory}onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}