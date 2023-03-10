import ITask from '../../../types/ITask';
import style from './Activity.module.scss';

interface IActivityProp extends ITask {
    selectTask: (selectdTask: ITask) => void
}

export default function Activity(task: IActivityProp) {
    const selectTaskFunction = task.selectTask;
    return (
        <li className={`${style.item} 
                        ${task.selected ? style.itemSelecionado : style.item}
                        ${task.completed ? style.itemCompletado : ''} `} 
            onClick={() => !task.completed && selectTaskFunction(task)}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
            {task.completed && <span className={style.concluido}></span>}
        </li>
    )
}