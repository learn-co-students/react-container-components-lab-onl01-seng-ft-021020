import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }
    
    handleChange = (event) => {
        this.setState(
            {searchTerm: event.target.value}
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchReviews(this.state.searchTerm)
    }

    fetchReviews = (searchTerm) => {
        fetch(URL+searchTerm)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    reviews: data.results,
                    searchTerm: ""
                })
            })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchTerm} type="text" onChange={this.handleChange}/>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
