import React from 'react'
import Comment from '../components/Comment'


const CommentsList = (props) => {

  let comments = props.comments.map((comment, index) => {
    return <Comment key={index} comment={comment} deleteComment={props.deleteComment} />
  })

  return (
    <ul>
      {comments}
    </ul>
  )

}



export default CommentsList
