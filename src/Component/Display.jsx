import React, { Component } from 'react';
import MovieSearch from './MovieSearch';

class Display extends Component {
    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                <MovieSearch />
            </div>
        );
    }
}

export default Display;