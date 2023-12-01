import {ITask} from "../Interfaces.ts";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}


//html for added tasks and delete button
const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {
                completeTask(task.taskName);
            }}>X</button>
        </div>
    )
}

export default TodoTask;