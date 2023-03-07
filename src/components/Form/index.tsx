import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="activity">
                        Adicionar uma nova atividade
                    </label>
                    <input type="text" name="activity" id="activity" placeholder="O que você quer estudar?" required/>
                </div>
                <div>
                    <label htmlFor="time">
                        Tempo da Atividade
                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="09:00:00" required/>
                </div>
                <Button/>
            </form>
        )
    }
}

export default Form;