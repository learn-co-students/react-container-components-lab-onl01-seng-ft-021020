// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return(
        <div className="review-list">
            <ul>
                {reviews.map(review =>
                    <div className="review">
                        <li>
                            <h3>{review.headline}</h3>
                            <h4>By: {review.headline}</h4>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default MovieReviews