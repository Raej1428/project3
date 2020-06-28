import React from "react";
// import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addPost } from '../actions.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import CustomInput from "../../..//components/CustomInput/CustomInput.js;
// import Button from "../../..//components/CustomButtons/Button.js;
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import SpotifyApp from "./SpotifyApp.js";
// import { title } from "../../..//assets/jss/material-kit-react.js;
// import buttonStyle from "../../../assets/jss/material-kit-react/components/buttonStyle";

const useStyles = makeStyles(styles);
export default function WorkoutSection() {
  const classes = useStyles();
  return (
       <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}> Work it Out.</h1>
                <h3 className={classes.subtitle}>
                  Check back get updated workouts anytime. Create and listen to your favorite workout playlist on Spotify.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.container}>
            <SpotifyApp />
          </div>
    </div>

  );
 
}

serviceWorker.unregister();
