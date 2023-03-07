import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="activity">
                        Adicionar uma nova atividade
                    </label>
                    <input type="text" name="activity" id="activity" placeholder="O que você quer estudar?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo da Atividade
                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="09:00:00" required/>
                </div>
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;