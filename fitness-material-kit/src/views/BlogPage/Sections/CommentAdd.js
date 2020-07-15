import React, { useState } from "react";
// import { reset } from "redux-form";
import "firebase/firestore";
// import firestoreDB from "../firebase-redux/firestore";
import Button from "../../../components/CustomButtons/Button";
import { connect } from 'react-redux'
import { addComment } from './commentActions.js';

function CommentAdd(props) {
    // const { handleCommentSubmit } = props;
   
    function handleCommentSubmit(e) {
        const commentData = {
            comment: document.querySelector("#comment").value,
            date: Date.now()
        };
        console.log(commentData);
        props.addComment(commentData)
        setComment(commentData);

        // return firestoreDB.collection("blog-page").where("").update(commentData)
        //     .then(function (docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //         reset("blogForm");
        //     }).catch(function (error) {
        //         console.error("Error adding document: ", error);
        //     });
    }

    const [comment, setComment] = useState("");
    console.log(comment);
    return (
        <div>
            <div className="card mt-4 mb-3">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                <textarea id="comment" className="form-control" placeholder="Add a new Comment" onChange={event => setComment(event.target.value)}></textarea>
                </div>
            </div>
            <div>
                <Button onClick={handleCommentSubmit} color="primary">Post</Button>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    addComment
};

export default connect(addComment, mapDispatchToProps)(CommentAdd)