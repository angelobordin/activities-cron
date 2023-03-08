import style from './Activities_List.module.scss';
import Activity from "./Activity/Activity";
import ITask from "../../types/ITask";

interface ITasksProp {
    tasksProp: ITask[]
}

function ActivitiesList(tasks: ITasksProp) {
    const taskList = tasks.tasksProp;
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {taskList.map((task, index) => (
                    <Activity key={index} {...task}/>  
                ))}
            </ul>
        </aside>
    )
}

export default ActivitiesList;