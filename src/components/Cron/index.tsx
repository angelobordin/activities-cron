import Button from "../Button";
import Clock from "./Clock";
import style from './Cron.module.scss';

export default function Cron() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma atividade e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock></Clock>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}