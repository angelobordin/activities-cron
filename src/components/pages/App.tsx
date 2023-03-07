import React from "react";
import Form from "../Form";
import ActivitiesList from "../Activities_List";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <ActivitiesList/>
    </div>
  );
}

export default App;
