import React from 'react'


const Review = ({currentUser, review, deleteReview}) => {

	// const handleDelete = (event) => {
	// 	deleteReview(review)
	// }


	return (
		<ul>
			<li>
					{review.text}
					{/* <button onClick={handleDelete} >DELETE</button> */}
			</li>
		</ul>
	)
}


export default Review
