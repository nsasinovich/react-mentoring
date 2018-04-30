import React from 'react';
import './app.scss';
import Footer from './components/footer/footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Footer />
            </div>
        );
    }
}
