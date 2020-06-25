import React from "react";
// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addPost } from '../actions.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js.js";
import GridItem from "../../../components/Grid/GridItem.js.js";
// import CustomInput from "views/RecipePage/Sections/node_modules/components/CustomInput/CustomInput.js.js";
// import Button from "views/RecipePage/Sections/node_modules/components/CustomButtons/Button.js.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js.js";
// import { title } from "views/RecipePage/Sections/node_modules/assets/jss/material-kit-react.js.js";
// import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle";

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
                  Check back get updated workouts anytime.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
    </div>
  );
}


