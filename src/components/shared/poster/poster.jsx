// @flow
import React from 'react';
import defaultPoster from '../../../images/no_poster.png';
import { PosterSizes } from '../../../constants/app_constants';

import './poster.scss';

type Props = {
    posterSize: string,
    imgUrl: string,
};

const Poster = (props: Props) => (
    <div className={`poster ${props.posterSize}`} >
        <img src={props.imgUrl} />
    </div>
);

Poster.defaultProps = {
    posterSize: PosterSizes.MEDIUM,
    imgUrl: defaultPoster,
};

export default Poster;
