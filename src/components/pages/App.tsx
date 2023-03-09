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

  function completeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasksInState => oldTasksInState.map(task => {
        if (task.id === selected.id) {
           return {
            ...task,
            selected: false,
            completed: true
           }
        }

        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <ActivitiesList tasksProp={tasks} selectTask={selectTask}/>
      <Cron selected={selected} completeTask={completeTask}/>
    </div>
  );
}

export default App;
