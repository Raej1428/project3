import React from 'react';
import { connect } from 'react-redux'
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/landingPage.js";
// import Parallax from "../../../components/Parallax/Parallax.js";
import Button from "../../../components/CustomButtons/Button";
import CommentGroup from "./CommentGroup";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";


function PostList(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const arr = props.posts;
    console.log(props.posts);
    const listItems = arr.map((items, index) =>
        <div key={index} justify="center">
            <h1 className={classes.titles} key={index}>{items.title}</h1>
            <hr />
            <h2 className={classes.subtitles}>Category: {items.category}</h2>
            <hr />
            <p className={classes.description}>{items.details}</p>
            <hr />
            <CommentGroup />
        </div>
    );
    return (
        // <Parallax>
        <div className={classes.containter}>
            <GridContainer justify="center">
                <GridItem >
                    <div className={classes.mainRaised}>
                        {listItems}
                    </div>
                </GridItem>
            </GridContainer>
        </div>
        // </Parallax>
    );
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList)