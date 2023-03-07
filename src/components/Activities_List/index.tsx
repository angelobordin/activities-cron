import React from "react";
import style from './Activities_List.module.scss';
import Activity from "./Activity/Activity";
import { ITask } from "../../models/ITask";

function ActivitiesList() {
    const task: ITask[] = [{
        name: 'React',
        time: '02:00:00'
    },{
        name: 'JavaScript',
        time: '01:00:00'
    },{
        name: 'TypeScript',
        time: '01:30:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {task.map((task, index) => (
                    <Activity key={index} {...task}/>  
                ))}
            </ul>
        </aside>
    )
}

export default ActivitiesList;