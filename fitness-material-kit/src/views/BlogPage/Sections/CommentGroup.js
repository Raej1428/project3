import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CommentAdd from "./CommentAdd";
import Comment from "./Comment";
import { checkPropTypes } from "prop-types";
import { timingSafeEqual } from "crypto";
class CommentGroup extends Component {

    render() {
        return (
            <div>
                <CommentAdd />
            </div>
        )
    }
}
export default CommentGroup