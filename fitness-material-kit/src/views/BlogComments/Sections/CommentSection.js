import React from "react";
import { useState } from 'react';
import { connect } from 'react-redux'
import { addPost } from './actions.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
// import { title } from "../../../assets/jss/material-kit-react.js";
// import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle";
// import BlogComments from "../../BlogComments/BlogComments";

const useStyles = makeStyles(styles);
function CommentSection(props) {
    // console.log("Here I am " + posts);
    console.log("Here I am " + props);
    const [posts, setPost] = useState('');

    // function handleChange(e) {
    //   console.log(e.target.name + e.target.value);
    //   const newPost = {...post};
    //   console.log(newPost);
    //   newPost[e.target.name] = e.target.value;
    //   console.log(newPost);
    //   setPost(newPost);
    // }

    function postComment(e) {
        e.preventDefault(e);
        console.log(document.querySelector("#name").value);

        const newPost = {
            name: document.querySelector("#name").value,
            title: document.querySelector("#title").value,
            category: document.querySelector("#category").value,
            details: document.querySelector("#details").value
        }
        console.log(newPost);
        props.addPost(newPost);
        setPost(newPost);
    }

    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Post a Comment</h2>
                    <h5 className={classes.description}>
                        Find a helpful profile, blog post, recipe, or workout? Let them know what you think!
          </h5>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Associated Profile:"
                                    id="profile"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Article, Recipe, or Workout Title:"
                                    id="title"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Category:"
                                    id="category"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                labelText="Comment:"
                                id="comment"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                            />
                            <GridItem xs={12} sm={12} md={4}>
                                <Button onClick={postComment} color="primary">Post</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}


const mapDispatchToProps = {
    addPost
}

export default connect(null, mapDispatchToProps)(CommentSection)