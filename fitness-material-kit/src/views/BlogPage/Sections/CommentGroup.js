import React, { Component } from "react";
import CommentAdd from "./CommentAdd";

class CommentGroup extends Component {

    render() {
        return (
            <div>
                <CommentAdd id={this.props.id} />
            </div>
        )
    }
}
export default CommentGroup