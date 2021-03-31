// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({
  headline,
  byline,
  link,
  publication_date,
  summary_short
}) => {
  return (
    <div className='review' key={headline}>
      <header>
      <a className='review-link' href={link.url}>
        {headline}
      </a>
      </header>
      <h3 className='author'>Author {byline}</h3>
      <p className='summary'> {summary_short} </p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return <div className='review-list'>{reviews.map(Review)}</div>
}

export default MovieReviews;
