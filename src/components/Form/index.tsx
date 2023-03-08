import React from "react";
import ITask from "../../types/ITask";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 } from 'uuid';

class Form extends React.Component<{ setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }> {

    state = { name: '', time: '00:00' };

    registerNewTask(event: React.FormEvent) {
        event.preventDefault();
        this.props.setTasks(oldTasksInState => [ ...oldTasksInState, { ...this.state, selected: false, completed: false, id: v4() }]);
        this.setState({
            name: '',
            time: '00:00'
        });
    };

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.registerNewTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="activity">
                        Adicionar uma nova atividade
                    </label>
                    <input value={this.state.name} onChange={event => this.setState({ ...this.state, name: event.target.value })} type="text" name="activity" id="activity" placeholder="O que você quer estudar?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo da Atividade
                    </label>
                    <input value={this.state.time} onChange={event => this.setState({ ...this.state, time: event.target.value })} type="time" step="1" name="time" id="time" min="00:00:00" max="09:00:00" required/>
                </div>
                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        );
    };
};

export default Form;