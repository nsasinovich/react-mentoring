import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import { PosterSizes } from './constants/poster_constants';
import Poster from './components/shared/poster/poster';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Footer />
                <Poster posterSize={PosterSizes.MEDIUM} imgUrl='https://cdn.miramax.com/media/assets/Pulp-Fiction1.png'/>
            </div>
        );
    }
}
