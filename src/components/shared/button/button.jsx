// @flow
import * as React from 'react';

import './button.scss';

type Props = {
    buttonClass: string,
    children: any,
    onClick: Function,
}

const Button = (props: Props) => (
    <button className={`button ${props.buttonClass}`} onClick={props.onClick}>
        {props.children}
    </button>
);

Button.defaultProps = {
    buttonClass: '',
    children: '',
};

export default Button;
