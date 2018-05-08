import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ buttonClass, children }) => (
    <button className={`button ${buttonClass}`}>{children}</button>
);

Button.propTypes = {
    buttonClass: PropTypes.string,
    children: PropTypes.string,
};

Button.defaultProps = {
    buttonClass: '',
    children: '',
};

export default Button;
