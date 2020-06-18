// Code MovieReviews Here
import React from 'react'


const MovieReviews = props => {
 
    return(<div className="review-list">
        {props.reviews.map(review =>(
        <div className='review'>
            <h1>{review.headline}</h1>
            <p>Rating: {review.mpaa_rating}</p>
            <p>Author: {review.byline} </p>
            <p>Reviewed on: {review.publication_date}</p>
            <p>{review.summary_short}</p>
          </div>
        ))}
    </div>)
}
  
export default MovieReviews