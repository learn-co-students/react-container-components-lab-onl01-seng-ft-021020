import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{

    state={
        reviews: [],
        searchTerm: ""
    }


    handleOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    simulate = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=0rsJ1H2hO3GFJzTm0VVivEVgOuyN0ooJ&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results}))
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.simulate}>
                    <label>Enter Search Term</label>
                    <input type="text" onChange={event => this.handleOnChange(event)}/>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/> 
            </div>
        )
    }
}
