import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "./node_modules/views/WorkoutPage/Sections/node_modules/views/RecipePage/Sections/node_modules/components/Grid/GridContainer.js.js.js.js";
import GridItem from "./node_modules/views/WorkoutPage/Sections/node_modules/views/RecipePage/Sections/node_modules/components/Grid/GridItem.js.js.js.js";
import Button from "./node_modules/views/WorkoutPage/Sections/node_modules/views/RecipePage/Sections/node_modules/components/CustomButtons/Button.js.js.js.js";

import landing from "./node_modules/assets/img/landing.jpg";
import profile from "./node_modules/assets/img/profile.jpg";

import styles from "./node_modules/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View landing page
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
