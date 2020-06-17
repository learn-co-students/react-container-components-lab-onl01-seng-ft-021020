import React from 'react'

const MovieReviews = ({reviews}) => {
    // debugger
    return (
    <div className="review-list">{reviews.map(review => <p className="review">{review.display_title}</p>)}</div>
    )
}

export default MovieReviews 