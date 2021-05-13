import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            data: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting")
        const query = this.state.userInput
        //  variable for our url to live in
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=cd86fe34&t=${query}`;

        // use await to tell our function to wait for data
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            this.setState({
                data: data
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchMovies}>
                    <input type="text" value={this.state.userInput} onChange={this.handleChange} />
                    <button type='submit'>Search</button> 
                </form>
                <MovieCard MovieData={this.state.data} />
            </div>
        );
    }
}

export default MovieSearch;