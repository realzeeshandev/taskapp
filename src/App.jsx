import './App.css'
import { useEffect, useState } from 'react';
import Header from './Components/Header'
import Showtask from './Components/Showtask'
import Task from './Components/Task'
 
export default function App(){
  const [taskList, setTaskList] = useState(
JSON.parse(localStorage.getItem('taskList'))||[]

  );
   const [task, setTask] = useState({});
  useEffect(()=>{

    localStorage.setItem("taskList",JSON.stringify(taskList));
  } , [taskList]);
  

  return (
    <>
      <div className='App'>
        <Header/>
        <Task taskList={taskList}
         setTaskList={setTaskList} 
          task={task}
           setTask={setTask}/>
        <Showtask taskList={taskList}
         setTaskList={setTaskList}
          task={task}
           setTask={setTask}
         />
      </div>
    </>
  )
}
