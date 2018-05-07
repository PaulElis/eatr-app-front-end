import React from 'react'


const Review = ({review, deleteReview}) => {

	const handleDelete = (event) => {
		deleteReview(review)
	}

	return (
		<li>
			{review.name} says: {review.text}
			<button onClick={handleDelete} >DELETE</button>
		</li>
	)
}


export default Review
