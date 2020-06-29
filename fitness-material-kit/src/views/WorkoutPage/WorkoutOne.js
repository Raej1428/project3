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
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
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
            <Parallax filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <div className={classes.description}>
                            <h1 className={classes.title}>Signature Workouts</h1>
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
                                                        <h1 className={classes.title}>Arms</h1>
                                                        <p className={classes.description}>This workout is designed to use your own body weight.
                                                            For the bicep curls and tricep kickbacks, you can use a small weight or a gallon jug.</p>
                                                        <h2 className={classes.title}>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3 className={classes.title}>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3 className={classes.title}>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4 className={classes.title}>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4 className={classes.title}>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem className={classes.description}>15 Walkout Plank Pushups (Plank position, walk your hands in and out)</ListItem>
                                                            <ListItem className={classes.description}>15 Pushups</ListItem>
                                                            <ListItem className={classes.description}>60 Second Hold Side Arm Pose</ListItem>
                                                            <ListItem className={classes.description}>5 Superman Pushups</ListItem>
                                                            <ListItem className={classes.description}>25 Chair Letdowns</ListItem>
                                                            <ListItem className={classes.description}>15 Diamond Pushups (Put your hand in the shape of a diamond on the floor and execute pushup)</ListItem>
                                                            <ListItem className={classes.description}>15 Bicep Curls (Each arm)</ListItem>
                                                            <ListItem className={classes.description}>15 Tricep Kickbacks (Each arm)</ListItem>
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
                                                        <h1 className={classes.title}>Legs</h1>
                                                        <p className={classes.description}>This workout is designed to use your own body weight.</p>
                                                        <h2 className={classes.title}>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3 className={classes.title}>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3 className={classes.title}>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4 className={classes.title}>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4 className={classes.title}>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem className={classes.description}>50 Squats</ListItem>
                                                            <ListItem className={classes.description}>50 Mountain Climbers (Count each leg)</ListItem>
                                                            <ListItem className={classes.description}>25 Clamchells (Each leg)</ListItem>
                                                            <ListItem className={classes.description}>15 Broad Jumps</ListItem>
                                                            <ListItem className={classes.description}>15 Sumo Squats</ListItem>
                                                            <ListItem className={classes.description}>15 Reverse Lunge Reaches (Each leg)</ListItem>
                                                            <ListItem className={classes.description}>60 Seconds Butt Kicks</ListItem>
                                                            <ListItem className={classes.description}>25 Forward Lunges (Each leg)</ListItem>
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
                                                        <h1 className={classes.title}>Back</h1>
                                                        <p className={classes.description}>This workout is designed to use your own body weight.</p>
                                                        <h2 className={classes.title}>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3 className={classes.title}>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3 className={classes.title}>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4 className={classes.title}>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4 className={classes.title}>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem className={classes.description}>30 Superman Pulses</ListItem>
                                                            <ListItem className={classes.description}>30 Pushup Plank Arm Raises</ListItem>
                                                            <ListItem className={classes.description}>50 Hip Bends (Arms raised in the air bend at the hips until you touch your toes or need to stop)</ListItem>
                                                            <ListItem className={classes.description}>3 Minutes of Shadow Boxing (punches of any kind at the air)</ListItem>
                                                            <ListItem className={classes.description}>3 Minutes of Jumping Jacks</ListItem>
                                                            <ListItem className={classes.description}>30 Laying Down Side Leg Touches (Laying on one side kick the leg that is not on the floor in front of you and touch your toe if you can)</ListItem>
                                                            <ListItem className={classes.description}>30 Shoulder Touch Plank (In plank position lift hand off the ground and touch your opposite shoulder)</ListItem>
                                                            <ListItem className={classes.description}>25 Plank Elbow-Knee Touch (In plank position touch the opposite elbow to the opposite knee under your body.</ListItem>
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
                                                        <h1 className={classes.title}>Abdomen</h1>
                                                        <p className={classes.description}>This workout is designed to use your own body weight targetting your Abs.</p>
                                                        <h2 className={classes.title}>Medium {"&"} Intermediate Variations: </h2>
                                                        <h3 className={classes.title}>Medium: Multiple the number of reps or interval time, by two.</h3>
                                                        <h3 className={classes.title}>Hard: Multiple the number of reps or interval time, by three.</h3>
                                                        <h4 className={classes.title}>Challenge: Repeat each exercise for eight 3 minute rounds.</h4>
                                                        <h4 className={classes.title}>Extreme Challenge: Repeat each exercise for eight 5 minute rounds.</h4>
                                                        <List>
                                                            <ListItem className={classes.description}>60 Second Plank</ListItem>
                                                            <ListItem className={classes.description}>60 second Boat Pose</ListItem>
                                                            <ListItem className={classes.description}>30 Bicycle Crunches</ListItem>
                                                            <ListItem className={classes.description}>15 Sit-ups</ListItem>
                                                            <ListItem className={classes.description}>30 Side Crunches</ListItem>
                                                            <ListItem className={classes.description}>30 Lower Leg Lifts</ListItem>
                                                            <ListItem className={classes.description}>60 Lower Leg Pulse Kicks</ListItem>
                                                            <ListItem className={classes.description}>25 Boat Crunches</ListItem>
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
        </div>
    );
}
