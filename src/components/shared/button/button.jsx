import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default class Button extends React.Component {
    render() {
        const { buttonClass } = this.props;

        return (
            <button className={`button ${buttonClass}`}>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    buttonClass: PropTypes.string,
    children: PropTypes.string,
};
