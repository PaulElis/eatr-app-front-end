import React from 'react'


const Review = ({currentUser, review, deleteReview}) => {

	const handleDelete = (event) => {
		deleteReview(review)
	}

	return (
		<li>
			{review.user_id} says: {review.text}
			<button onClick={handleDelete} >DELETE</button>
		</li>
	)
}


export default Review
