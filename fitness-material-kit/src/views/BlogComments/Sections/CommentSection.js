import React, { Component } from "react";
import { useState } from 'react';
import { connect } from 'react-redux'
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
import { addPost } from './actions.js'
const classes = makeStyles(styles);

class Form extends Component {
    // Setting the component's initial state
    state = {
        profile: "",
        title: "",
        category: "",
        comment: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    updatePost = event => {
        event.preventDefault();
        // this.setState(document.getElementsByClassName("testCommentPost"));
        alert(`Comment Posted!`);

    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        this.setState({
            profile: "",
            title: "",
            category: "",
            comment: "",

        });
        console.log(this.state.profile)
    };

    render() {
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Post a Comment</h2>
                        <h5 className={classes.description}>
                            Find a helpful profile, blog post, recipe, or workout? Let them know what you think!
          </h5>
                        <form>
                            {/* <CommentList posts={props} /> */}
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        value={this.state.profile}
                                        labelText="Associated Profile:"
                                        name="profile"
                                        onChange={this.handleInputChange}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        value={this.state.title}
                                        labelText="Article, Recipe, or Workout Title:"
                                        name="title"
                                        onChange={this.handleInputChange}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        value={this.state.category}
                                        labelText="Category:"
                                        name="category"
                                        onChange={this.handleInputChange}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <CustomInput
                                    value={this.state.comment}
                                    labelText="Comment:"
                                    name="comment"
                                    onChange={this.handleInputChange}
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
                                    <Button onClick={this.handleFormSubmit, this.updatePost} color="primary">Comment</Button>
                                    <h1 className="testCommentPost" fontsize="40px" color="primary">dddd</h1>
                                </GridItem>
                            </GridContainer>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}



const mapDispatchToProps = {
    addPost
}

export default connect(null, mapDispatchToProps)(Form)