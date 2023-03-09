import React, { useState } from "react";
import Form from "../Form";
import ActivitiesList from "../Activities_List";
import style from './App.module.scss';
import Cron from "../Cron";
import ITask from "../../types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasksInState => oldTasksInState.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <ActivitiesList tasksProp={tasks} selectTask={selectTask}/>
      <Cron selected={selected}/>
    </div>
  );
}

export default App;
