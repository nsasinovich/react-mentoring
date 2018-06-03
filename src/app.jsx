import React from 'react';
import PropTypes from 'prop-types';
import './app.scss';
import Footer from './components/footer/footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="content-wrapper">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};
