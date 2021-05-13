import React, { Component } from 'react';

class MovieSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    searchMovies = (event) => {
        event.preventDefault
        
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=cd86fe34`
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchMovies}>
                    <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                    <button type='submit'></button>
                </form>
            </div>
        );
    }
}

export default MovieSearch;