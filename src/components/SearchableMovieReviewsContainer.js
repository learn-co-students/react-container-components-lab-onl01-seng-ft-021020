import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

function URL(query) {
  const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
  const URL =
    "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
    `api-key=${NYT_API_KEY}&query=${query}`;

  return URL;
}

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(URL(this.state.searchTerm))
      .then((res) => res.json())
      .then((json) => this.setState({ reviews:json.results, searchTerm: "" }));
  };

  render() {
    console.log('render');
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
