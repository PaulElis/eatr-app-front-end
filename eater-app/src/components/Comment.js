import React from 'react'


const Comment = ({comment, deleteComment}) => {

	const handleDelete = (event) => {
		deleteComment(comment)
	}

	return (
		<li>
			{comment.name} says: {comment.text}
			<button onClick={handleDelete} >DELETE</button>
		</li>
	)
}


export default Comment
