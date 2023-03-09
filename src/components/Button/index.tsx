import React from 'react';
import style from './Button.module.scss';

interface IProps {
    children: React.ReactNode,
    type?: "button" | 'submit' | 'reset' | undefined,
    onClick?: () => void
};

class Button extends React.Component<IProps> {
    render() {
        return (
            <button onClick={this.props.onClick} type={this.props.type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button