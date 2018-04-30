import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';
import { PosterSizes, FilterOptions } from './constants/app_constants';
import Poster from './components/shared/poster/poster';
import Button from './components/shared/button/button';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Footer />

                <Button buttonClass='filter-button button-selected'>{FilterOptions.GENRE}</Button>
                <Button buttonClass='filter-button button-unselected'>{FilterOptions.TITLE}</Button>
                <Button buttonClass='search-button button-selected'>Search</Button>

                <Poster posterSize={PosterSizes.MEDIUM} imgUrl='https://cdn.miramax.com/media/assets/Pulp-Fiction1.png'/>
            </div>
        );
    }
}
