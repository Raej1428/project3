import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


const useStyles = makeStyles(styles);

export default function WorkoutSection() {
  const classes = useStyles();
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Workouts</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Rock Solid.
                <br />
                <small className={classes.smallTitle}>Develop whatever you want, you'll find a workout for it here.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Signature Workouts.
                </p>
                <a href={"/workout-page"}>Workouts Page</a>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Link to={"/blog-page"} className={classes.link}>
                  <Button color="primary" size="lg">
                    Workouts Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Need More...? Check out the Blog Page for user submitted workouts and recipes!
                <br />
                <small className={classes.smallTitle}>More user submitted workouts on our Blog Page.</small>
              </h4>
              <CardBody>
              <Link to={"/blog-page"} className={classes.link}>
                  <Button color="primary" size="lg">
                    Blog Page
                  </Button>
                </Link>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
          
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
