import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
// import BlogSection from "./Sections/BlogSection.js";
// import PostList from "./Sections/PostList.js";
import { addPost } from "./Sections/actions.js";
import CommentSection from "./Sections/CommentSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BlogComments(props) {
    console.log(props);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Material Kit React"
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
                            <h1 className={classes.title}>Comments</h1>
                            <h4>
                                Let people know if there posts were helpful, or if you have tips that could help. Maybe you just wanna make some new online workout buddies?
              </h4>
                            <p> Please note this site is not for posts outside of fitness and whole body well being,
                please keep all posts related to current events, politics, etc. off of this site.</p>
                            <p>If a post or comment is hurtful, explicit(not including some swear words), or offensive, it will be removed. This is a platform to give and receive relevant health information so we can all be the best we can be. Enjoy!</p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <CommentSection />

                </div>
            </div>
            <Footer />
        </div>
    );
}
