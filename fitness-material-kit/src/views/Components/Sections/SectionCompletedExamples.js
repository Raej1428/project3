import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "./node_modules/views/WorkoutPage/Sections/node_modules/views/RecipePage/Sections/node_modules/components/Grid/GridContainer.js.js.js.js";
import GridItem from "./node_modules/views/WorkoutPage/Sections/node_modules/views/RecipePage/Sections/node_modules/components/Grid/GridItem.js.js.js.js";

import styles from "./node_modules/assets/jss/material-kit-react/views/componentsSections/completedStyle.js.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Completed with examples</h2>
            <h4>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you{"'"}re good to
              go. More importantly, looking at them will give you a picture of
              what you can build with this powerful kit.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
