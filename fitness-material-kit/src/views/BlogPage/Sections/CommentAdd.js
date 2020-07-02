import React, { useState } from "react";
import CommentGroup from "./CommentGroup";
import Button from "../../../components/CustomButtons/Button";

function CommentAdd(props) {
    // const { handleCommentSubmit } = props;
    function handleCommentSubmit(data) {
        const postData = {
            comment: data
        };
        console.log(comment)
    }

    const [comment, setComment] = useState("");
    return (
        <div>
            <div className="card mt-4 mb-3">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new Comment" onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>
            </div>
            <div>
                <Button onClick={handleCommentSubmit} color="primary">Post</Button>
            </div>
        </div>
    )
}
export default CommentAdd;