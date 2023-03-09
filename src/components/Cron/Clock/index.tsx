import style from './Clock.module.scss';

interface Props {
    time: number | undefined
}

export default function Clock(timeProps: Props) {
    const time = timeProps.time ?? 0;
    const [dezMinute, uniMinute] = String(Math.floor(time/60)).padStart(2, '0');
    const [dezSecond, uniSecond] = String(time % 60).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{dezMinute}</span>
            <span className={style.relogioNumero}>{uniMinute}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{dezSecond}</span>
            <span className={style.relogioNumero}>{uniSecond}</span>
        </>
    )
}