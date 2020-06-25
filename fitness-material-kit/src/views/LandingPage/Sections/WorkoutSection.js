import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/faces/avatar.jpg";
import team2 from "../../../assets/img/faces/christian.jpg";
import team3 from "../../../assets/img/faces/kendall.jpg";
import BlogPage from "../../BlogPage/BlogPage.js";

const useStyles = makeStyles(styles);

export default function WorkoutSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Workouts</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                How'd You Get Those Glutes Boo?
                <br />
                <small className={classes.smallTitle}>Lower Body Workout</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This is a workout program targeted at shaping the lower body for maximum results.
                  <a href="#pablo">(Placeholder Full Workout)</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                So Ripped You Can't Put Your Arms Down!
                <br />
                <small className={classes.smallTitle}>Upper Body</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This is a workout program targeted at shaping the upper body for maximum results.
                  <a href="#pablo">(Placeholder Full Workout)</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ripped Abs... Eat Your Heart Out Liam!
                <br />
                <small className={classes.smallTitle}>Abdomen</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This is a workout program targeted at shaping the abdomen for maximum results.
                  <a href="#pablo">(Placeholder Full Workout)</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                EveryDay Pliometrics
                <br />
                <small className={classes.smallTitle}>Lower Body Workout</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This is a workout program targeted at shaping the whole body for maximum results.
                  <a href="#pablo">(Placeholder Full Workout)</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Need More...? Check out the Blog Page for user submitted workouts and recipes!
                <br />
                <small className={classes.smallTitle}>More user submitted workouts in the Blog Page</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Check it out!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="danger"
                  size="lg"
                  href={BlogPage}
                  target="_blank"
                >
                  Blog Page
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
