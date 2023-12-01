import './App.css'
import React, {ChangeEvent, useState} from "react";
import {ITask} from "./Interfaces.ts";
import TodoTask from "./Components/TodoTask.tsx";

const App:React.FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'task') {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    const completeTask = (taskNameToDelete: string) => {
        setTodo(todo.filter((task)  => {
            return task.taskName != taskNameToDelete;
        }))
    }

    const addTask = () => {
        const newTask = {
            taskName: task,
            deadline: deadline,
        }
        setTodo([...todo, newTask]);
        setTask("");
        setDeadline(0);
    }

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
