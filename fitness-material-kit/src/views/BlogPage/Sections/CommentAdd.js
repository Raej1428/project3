import React, { useState } from "react";
import Button from "../../../components/CustomButtons/Button";

function CommentAdd(props) {
    console.log(props)
    function handleCommentSubmit(e) {
        const postData = {
            comment: document.querySelector("comment"),
        };
        console.log(props.id, comment);
        setComment("");
    }

    const [comment, setComment] = useState("");
    return (
        <div>
            <div className="card mt-4 mb-3">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                    <textarea id="comment" className="form-control" placeholder="Add a new Comment" onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>
            </div>
            <div>
                <Button onClick={handleCommentSubmit} color="primary">Comment</Button>
            </div>
        </div>
    )
}
export default CommentAdd;