import React from 'react'
import Review from '../components/Review'


const ReviewsList = (props) => {

  let reviews = props.reviews.map((review, index) => {
    return <Review key={index} currentUser={props.currentUser} review={review} deleteReview={props.deleteReview} />
  })

  return (
    <ul>
      {reviews}
    </ul>
  )

}



export default ReviewsList
