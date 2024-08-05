import Comment from "./Comment"
import "./styles/CommentsStyle.css"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import data from "../jsonData/comments.json"
import { useRef } from "react";

function Comments({commentRef}) {

    let commentsRef = useRef(null)

    function scrollUp (ref) { 
        ref.scrollBy(0, -140)
    }
    function scrollDown(ref) {
        ref.scrollBy(0, 140)
    }




    return (
        <section ref={commentRef} className="comments-section">
            <h3 className="comment-title">نظرات شما</h3>
            <div className="comments-container">

                <IoIosArrowUp onMouseDown={() => scrollUp(commentsRef.current)} className="comment-icon"/>
                <div ref={commentsRef} className="comments">
                    {
                        data.map(comment => <Comment comment={comment}/>)
                    }
                </div>
                <IoIosArrowDown  onMouseDown={() => scrollDown(commentsRef.current)} className="comment-icon" />
            </div>

        </section>
    )
}

export default Comments