import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ buttonClass, onClick, children }) => (
    <button className={`button ${buttonClass}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
    buttonClass: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    buttonClass: '',
    children: '',
};

export default Button;
