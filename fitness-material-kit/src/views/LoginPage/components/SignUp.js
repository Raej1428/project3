import React from "react";
import { reset } from "redux-form"
import { useState } from 'react';
import { connect } from 'react-redux';
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
import { createUser } from "../actions/signin.js";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const [user, setPost] = useState('');
  console.log("Here I am " + user);
  console.log("Here I am " + props);

  function handleSubmit(e) {
    // e.preventDefault();
    console.log(document.querySelector("#email").value);
    const newUser = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      key: Date.now()
    }
    console.log(newUser);
    props.addPost(newUser);
    setPost(newUser);
  }

 function addUserFire(){
    const newUser = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      key: Date.now()
    }
    console.log(newUser);
    return firestoreDB.collection("users").add(newUser)
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
      reset("blogForm");
    }).catch(function(error) {
    console.error("Error adding document: ", error);});
 }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.password}>Sign Up!</h2>
          <h5 className={classes.description}>
            Sign up for exclusive benefits in the future!
          </h5>
          <form onSubmit={() => {
                  handleSubmit();
                  addUserFire();
                }}  
                id="blogForm">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="password:"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button  type="submit"  color="primary">Post</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapDispatchToProps = {
  createUser
};

export default connect(createUser, mapDispatchToProps)(SignUp)