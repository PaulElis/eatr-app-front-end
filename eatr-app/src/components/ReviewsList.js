import React from 'react'
import Review from '../components/Review'
import '../styles/ReviewsList.css'


const ReviewsList = (props) => {

  // const ifReviews = () => {
  //   if(props.reviews){
  //     props.reviews.map((review, index) => {
  //       return <Review key={index} currentUser={props.currentUser} review={review} deleteReview={props.deleteReview} />
  //     })
  //   }
  // }

  const reviews = props.reviews ? props.reviews.map((review, index) => {
    return <Review key={index} currentUser={props.currentUser} business={props.business} review={review} deleteReview={props.deleteReview} />
  }) : null

  return (
    <div className='ReviewsList'>
      {/* { ifReviews() } */}
      {reviews}
    </div>
  )

}



export default ReviewsList
