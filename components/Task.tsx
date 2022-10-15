import React from 'react'
import { TaskInterface } from './Interfaces/Interface'

interface Props{
    task: TaskInterface;
    completeTask(taskNameToDelete: string): void;
}

export default function Task({task, completeTask}:Props) {
    console.log(task.deadline);
    
  return (
    <div>
        <div>
        {task.taskName} deadLine: {task.deadline} <button className='' onClick={()=>{completeTask(task.taskName)}}> x</button>
        </div>
        </div>
  )
}
