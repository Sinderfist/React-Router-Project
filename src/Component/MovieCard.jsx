import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends Component {
    render() {
        return (
            <div>
                <Link to={`/Display/${this.props.movieData.Plot}`}>
                    <h1>{this.props.movieData.Title}</h1>
                </Link>
            </div>
        );
    }
}

export default MovieCard;