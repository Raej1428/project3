import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import RowingIcon from '@material-ui/icons/Rowing';
// core components
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js.js";
import GridItem from "../../components/Grid/GridItem.js.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function WorkoutOne(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <div className={classes.description}>
                            <h1>Signature Workouts</h1>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Arms",
                                            tabIcon: AccessibilityNewIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <h1>Arms</h1>
                                                        <p>This workout is designed to use your own body weight.
                                                            For the bicep curls and tricep kickbacks, you can use a small weight or a gallon jug.</p>
                                                        <h2>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem>15 Walkout Plank Pushups (Plank position, walk your hands in and out)</ListItem>
                                                            <ListItem>15 Pushups</ListItem>
                                                            <ListItem>60 Second Hold Side Arm Pose</ListItem>
                                                            <ListItem>5 Superman Pushups</ListItem>
                                                            <ListItem>25 Chair Letdowns</ListItem>
                                                            <ListItem>15 Diamond Pushups (Put your hand in the shape of a diamond on the floor and execute pushup)</ListItem>
                                                            <ListItem>15 Bicep Curls (Each arm)</ListItem>
                                                            <ListItem>15 Tricep Kickbacks (Each arm)</ListItem>
                                                        </List>
                                                        <img
                                                            alt="..."
                                                            src={studio4}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Legs/ Glutes",
                                            tabIcon: FitnessCenterIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <h1>Legs</h1>
                                                        <p>This workout is designed to use your own body weight.</p>
                                                        <h2>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem>50 Squats</ListItem>
                                                            <ListItem>50 Mountain Climbers (Count each leg)</ListItem>
                                                            <ListItem>25 Clamchells (Each leg)</ListItem>
                                                            <ListItem>15 Broad Jumps</ListItem>
                                                            <ListItem>15 Sumo Squats</ListItem>
                                                            <ListItem>15 Reverse Lunge Reaches (Each leg)</ListItem>
                                                            <ListItem>60 Seconds Butt Kicks</ListItem>
                                                            <ListItem>25 Forward Lunges (Each leg)</ListItem>
                                                        </List>
                                                        <img
                                                            alt="..."
                                                            src={work5}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }, 
                                        {
                                            tabButton: "Back",
                                            tabIcon: DirectionsWalkIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <h1>Back</h1>
                                                        <p>This workout is designed to use your own body weight.</p>
                                                        <h2>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem>30 Superman Pulses</ListItem>
                                                            <ListItem>30 Pushup Plank Arm Raises</ListItem>
                                                            <ListItem>50 Hip Bends (Arms raised in the air bend at the hips until you touch your toes or need to stop)</ListItem>
                                                            <ListItem>3 Minutes of Shadow Boxing (punches of any kind at the air)</ListItem>
                                                            <ListItem>3 Minutes of Jumping Jacks</ListItem>
                                                            <ListItem>30 Laying Down Side Leg Touches (Laying on one side kick the leg that is not on the floor in front of you and touch your toe if you can)</ListItem>
                                                            <ListItem>30 Shoulder Touch Plank (In plank position lift hand off the ground and touch your opposite shoulder)</ListItem>
                                                            <ListItem>25 Plank Elbow-Knee Touch (In plank position touch the opposite elbow to the opposite knee under your body.</ListItem>
                                                        </List>
                                                        <img
                                                            alt="..."
                                                            src={work5}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Abs",
                                            tabIcon: RowingIcon,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <h1>Abdomen</h1>
                                                        <p>This workout is designed to use your own body weight targetting your Abs.</p>
                                                        <h2>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem>60 Second Plank</ListItem>
                                                            <ListItem>60 second Boat Pose</ListItem>
                                                            <ListItem>30 Bicycle Crunches</ListItem>
                                                            <ListItem>15 Sit-ups</ListItem>
                                                            <ListItem>30 Side Crunches</ListItem>
                                                            <ListItem>30 Lower Leg Lifts</ListItem>
                                                            <ListItem>60 Lower Leg Pulse Kicks</ListItem>
                                                            <ListItem>25 Boat Crunches</ListItem>
                                                        </List>
                                                        <img
                                                            alt="..."
                                                            src={work5}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
