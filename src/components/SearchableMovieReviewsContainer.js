import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  textEntry = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  submitSearch = (e) => {
    e.preventDefault()
    console.log(this.state)
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.results
      }), () => console.log(this.state))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.submitSearch}>
          <input type='text' onChange={this.textEntry} value={this.state.searchTerm} />
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
      
    );
  }
  
}

export default SearchableMovieReviewsContainer
