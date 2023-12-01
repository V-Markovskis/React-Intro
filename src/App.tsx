import './App.css'
import React, {ChangeEvent, useState} from "react";
import {ITask} from "./Interfaces.ts";
import TodoTask from "./Components/TodoTask.tsx";


//App:React.FC format App function to be as the typescript standard
const App:React.FC = () => {
    //retrieve the data that are been passed in the input fields (useState)
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    //store what the user is writing
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'task') {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    //remove task if clicked 'X'
    const completeTask = (taskNameToDelete: string) => {
        setTodo(todo.filter((task)  => {
            return task.taskName != taskNameToDelete;
        }))
    }

    const addTask = () => {
        //create task from current (task, deadline)
        const newTask = {
            taskName: task,
            deadline: deadline,
        }
        //update array from tasks
        setTodo([...todo, newTask]);
        //clear input fields
        setTask("");
        setDeadline(0);
    }

    //elements that will be rendered in the browser
    return (
    <div className='App'>
        <div className='header'>
            <div className='inputContainer'>
                <input type='text' name='task' placeholder='Add activity TODO' value={task} onChange={handleChange} />
                <br/>
                <br/>
                <input type='number' name='deadline' placeholder='Set a deadline(in days)' value={deadline} onChange={handleChange} />
            </div>
            <br/>
            <button onClick={addTask}>Add</button>
        </div>
        <div className='todoList'>
            {todo.map((task: ITask, key: number) => <TodoTask key={key} task={task} completeTask={completeTask}/>)}
        </div>
    </div>
  )
}

export default App
