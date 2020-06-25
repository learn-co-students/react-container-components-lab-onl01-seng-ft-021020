// Code MovieReviews Here
import React from 'react';

const Review = ({headline, display_title}) => {
    return (
        <div>{display_title}: {headline}</div>
    )
}

const MovieReviews =({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

export default MovieReviews;