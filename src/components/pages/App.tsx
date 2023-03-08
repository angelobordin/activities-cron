import React, { useState } from "react";
import Form from "../Form";
import ActivitiesList from "../Activities_List";
import style from './App.module.scss';
import Cron from "../Cron";
import ITask from "../../types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <ActivitiesList tasksProp={tasks} />
      <Cron/>
    </div>
  );
}

export default App;
