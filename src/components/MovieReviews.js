import React from 'react'

const MovieReviews = (props) => {
  console.log(props)
  return (
    <div className='review-list'>
      {props.reviews.map( review => (
        <div className='review'>
          <h1>{review.display_title}</h1>
          {/* <img src={review.multimedia.src} alt='' /> */}
          <p>Rating: {review.mpaa_rating}</p>
          <span>Author: {review.byline}  |  {review.publication_date}</span>
          <p>{review.summary_short}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieReviews
