import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = event => this.setState({searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL + this.state.searchTerm)
            .then(res => res.json())
            .then(movieData => this.setState({reviews: movieData.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="search-input"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>

                {this.state.reviews > 0 && <MovieReviews reviews={this.state.reviews} />}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;