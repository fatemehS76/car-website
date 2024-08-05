import "./styles/CommentStyle.css"

import data from "../jsonData/comments.json"

function Comment(props) {
    let {name, status, message} = props.comment



    return (    
                <div className="comment-container">
                <p className="comment-name">{name}</p>
                <p className="comment-status"> {status}</p>
                <p className="comment">{message}</p>
                </div>
            )
}
export default Comment