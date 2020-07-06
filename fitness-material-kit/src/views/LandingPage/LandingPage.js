import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import { Link } from "react-router-dom";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkoutSection from "./Sections/WorkoutSection.js";
import RegisterPage from "../RegisterPage/RegisterPage.js";
import LoginPage from "../LoginPage/LoginPage";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Fitness Page"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Fitness Journey Starts Here.</h1>
              <h4>
                Every step you take towards a new healthier you will be reinforced here. 
                We offer intense workout programs, healthy recipes, and peer collaboration to help you get where you want to be on your health journey.
                Come explore the healthier side of living with DU Fitness. Do you, be healthy, start your journey here. 
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href={RegisterPage}
              >
                <Link to="/register-page" className={classes.dropdownLink}>
                Register Today!
                </Link>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkoutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
