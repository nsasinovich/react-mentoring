import React from 'react';
import PropTypes from 'prop-types';

import './poster.scss';

export default class Poster extends React.Component {
    render() {
        const { posterSize, imgUrl } = this.props;

        return (
            <div className={`poster ${posterSize}`} >
                <img src={imgUrl} />
            </div>
        );
    }
}

Poster.propTypes = {
    posterSize: PropTypes.string,
    imgUrl: PropTypes.string,
};
