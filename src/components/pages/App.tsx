import React from "react";
import Form from "../Form";
import ActivitiesList from "../Activities_List";
import style from './App.module.scss';
import Cron from "../Cron";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <ActivitiesList/>
      <Cron/>
    </div>
  );
}

export default App;
