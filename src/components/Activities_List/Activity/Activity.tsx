import ITask from '../../../models/ITask';
import style from '../Activities_List.module.scss';


export default function Activity(taskProps: ITask) {
    return (
        <li className={style.item}>
            <h3>{taskProps.name}</h3>
            <span>{taskProps.time}</span>
        </li>
    )
}