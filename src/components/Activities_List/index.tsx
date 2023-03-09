import style from './Activities_List.module.scss';
import Activity from "./Activity/Activity";
import ITask from "../../types/ITask";

interface ITasksProp {
    tasksProp: ITask[],
    selectTask: (selectdTask: ITask) => void
}

function ActivitiesList({ tasksProp, selectTask }: ITasksProp) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tasksProp.map(task => (
                    <Activity selectTask={selectTask} key={task.id} {...task}/>  
                ))}
            </ul>
        </aside>
    )
}

export default ActivitiesList;