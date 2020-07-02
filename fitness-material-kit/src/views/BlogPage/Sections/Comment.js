import React, { Component } from "react";
import CommentAdd from "./CommentAdd";

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { body } = this.props;
        return (
            <div className="comment card mb-2">
                <div className="card-body">
                    {body}
                </div>
            </div>

        )
    }
}

export default Comment;