import React from 'react'


const Review = ({business, currentUser, review, deleteReview}) => {

	// const handleDelete = (event) => {
	// 	deleteReview(review)
	// }

	const ifReview = () => {
		if(business.reviews) {
			return business.reviews.map((eachReview) => {
				return <li> {eachReview.text} </li>
			})
		} else {
			return null
		}
	}


	return (
		<div>
			<ul>
					{ ifReview() }
			</ul>
		</div>
	)
}


export default Review
