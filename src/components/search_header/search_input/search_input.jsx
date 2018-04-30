import React from 'react';
import arrowIcon from '../../../images/arrow.png';

import './search_input.scss';

const INPUT_PLACEHOLDER = 'Let\'s find your movie';

export default class SearchInput extends React.Component {
    render() {
        return (
            <div className="search-input-wrapper">
                <input className="search-input" placeholder={INPUT_PLACEHOLDER}></input>
                <img src={arrowIcon} />
            </div>
        );
    }
}
