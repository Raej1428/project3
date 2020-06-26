import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AddComment from "@material-ui/icons/AddComment";
import VpnKey from "@material-ui/icons/VpnKey";
import EmojiFoodBeverage from "@material-ui/icons/EmojiFoodBeverage";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>DU Fitness</h2>
          <h5 className={classes.description}>
            You've got a million things to do in a day, but did you do anything about your fitness?
            Look no further, with DU Fitness you can log your daily workouts, check out super healthy recipes, and blog about your fitness journey. 
            It's easy to do a million things in a day, and we're here to help you DU your fitness too!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blog About the Journey"
              description="Check out the latest fitness posts by our community and respond to other posts."
              icon={AddComment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Sign Up"
              description="Sign up to be a part of the community."
              icon={VpnKey}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Checkout user submitted recipes to get the latest nutrition hacks from other users."
              icon={EmojiFoodBeverage}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
