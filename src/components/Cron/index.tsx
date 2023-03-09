import { useEffect, useState } from "react";
import timeToSeconds from "../../common/utils/timeFunctions";
import ITask from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from './Cron.module.scss';

interface IProps {
    selected: ITask | undefined,
    completeTask: () => void
}

export default function Cron({ selected, completeTask }: IProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) setTime(timeToSeconds(selected.time));
    }, [selected]);

    function regressiva(cont: number = 0) {
        setTimeout(() => {
            if (cont > 0) {
                setTime(cont - 1);
                return regressiva(cont - 1);
            };

            completeTask();
        }, 1000);
    };

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma atividade e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressiva(time)}>
                Começar!
            </Button>
        </div>
    )
}