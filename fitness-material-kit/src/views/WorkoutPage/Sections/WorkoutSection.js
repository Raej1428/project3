import React from "react";
// import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import SpotifyApp from "./SpotifyApp.js";

const useStyles = makeStyles(styles);
export default function WorkoutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem>
          <div className={classes.brand}>
            <h1 className={classes.title}> Work it Out</h1>
          </div>
          <div className={classes.container}>
            <SpotifyApp />
          </div>
        </GridItem>
      </GridContainer>
    </div>

  );

}

serviceWorker.unregister();
