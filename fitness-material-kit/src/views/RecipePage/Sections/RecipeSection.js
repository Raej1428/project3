import React from "react";
// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addPost } from '../actions.js.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
// import { title } from "../../../assets/jss/material-kit-react.js";
// import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle";

const useStyles = makeStyles(styles);
export default function RecipeSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Healthy Recipes.</h1>
                <h3 className={classes.subtitle}>
                  Check back get updated recipes anytime.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
    </div>
  );
}

