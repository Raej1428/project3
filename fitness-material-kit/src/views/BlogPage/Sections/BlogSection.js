import React from "react";
import { useState } from 'react';
import { connect } from 'react-redux'
import { addPost } from './actions.js';
import "firebase/firestore";
import firestoreDB from "../firebase-redux/firestore"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

function BlogSection(props) {
  const [posts, setPost] = useState('');
  console.log("Here I am " + posts);
  console.log("Here I am " + props);

  function handleSubmit(e) {
    // e.preventDefault();
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

 function addPostFire(){
    const newPost = {
      name: document.querySelector("#name").value,
      title: document.querySelector("#title").value,
      category: document.querySelector("#category").value,
      details: document.querySelector("#details").value
    }
    console.log(newPost);
    return firestoreDB.collection("blog-page").add(newPost)
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
    console.error("Error adding document: ", error);});
 }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Blog</h2>
          <h5 className={classes.description}>
            How's it going? Let us know.
            Found a new favorite recipe, workout, or reach one of your fitness goals, go ahead blog about it!
          </h5>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Screenname:"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Title:"
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
                labelText="The Details:"
                id="details"
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
                <Button onClick={() => {
                  handleSubmit();
                  addPostFire();
                }} color="primary">Post</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapDispatchToProps = {
  addPost
};

export default connect(addPost, mapDispatchToProps)(BlogSection)