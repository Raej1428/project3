import React from 'react';
import { connect } from 'react-redux'

function PostList(props) {
    const arr = props.posts;
    const listItems = arr.map((val, index) =>
        <li key={index}>{val}</li>
    );
    return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList)