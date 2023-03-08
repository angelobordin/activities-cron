import ITask from '../../../types/ITask';
import style from '../Activities_List.module.scss';

export default function Activity(task: ITask) {
    return (
        <li className={style.item}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}