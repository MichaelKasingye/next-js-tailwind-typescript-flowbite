import type { NextPage } from "next";
import { useState, ChangeEvent, SyntheticEvent } from "react";
// import MiniCard , {MiniCardInterface} from '../components/minicard'
import { TaskInterface } from "../components/Interfaces/Interface";
import Task from '../components/task';

const Home: NextPage = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<TaskInterface[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (event:SyntheticEvent): void => {
    event.preventDefault();

    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask])
    console.log(todoList);
    setTask('');
    setDeadline(0)
  };

  const completeTask = (taskToComplete: string): void => {
    setTodoList(todoList.filter(task => task.taskName != taskToComplete))
  }

  // const miniCardData: MiniCardInterface = {
  //   imgs:"/desktop.jpg",
  //    title:"MIchael"
  // }
  return (
    <div className="h-screen flex">
      <div className="max-w-sm m-auto p-1 border-2">
        {/* <MiniCard {...miniCardData}/> */}
        <form className="p-1 border-2" onSubmit={addTask}>
          <input
            type="text"
            className=" mx-1 border-2"
            placeholder="Task.."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            className="border-2"
            placeholder="Deadline..."
            name="deadLine"
            value={deadline}
            onChange={handleChange}
          />
          <button className="border-2 m-1" >
            Add task
          </button>
        </form>
        <div className="">
          {todoList.map((task:TaskInterface, key:number) =>  <Task key={key} task={task} completeTask={completeTask}/>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
//RESOURCE: https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
