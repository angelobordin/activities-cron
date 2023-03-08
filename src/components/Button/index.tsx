import React from 'react';
import style from './Button.module.scss';

interface IProps {
    children: React.ReactNode,
    type?: "button" | 'submit' | 'reset' | undefined
};

class Button extends React.Component<IProps> {
    render() {
        return (
            <button type={this.props.type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button