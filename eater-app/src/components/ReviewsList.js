import React from 'react'
import Review from '../components/Review'


const ReviewsList = (props) => {

  const ifReviews = () => {
    if(props.reviews){
      props.reviews.map((review, index) => {
        return <Review key={index} currentUser={props.currentUser} review={review} deleteReview={props.deleteReview} />
      })
    }
  }

  // const reviews = props.reviews.map((review, index) => {
  //   return <Review key={index} currentUser={props.currentUser} review={review} deleteReview={props.deleteReview} />
  // })

  return (
    <div>
      {ifReviews()}
      {/* {reviews} */}
    </div>
  )

}



export default ReviewsList
