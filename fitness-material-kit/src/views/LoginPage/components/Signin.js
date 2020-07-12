import React, { useState } from "react";
import { reset } from "redux-form";
import { connect } from 'react-redux';
import "firebase/firestore";
import firestoreDB from "../../BlogPage/firebase-redux/firestore";
import { createUser } from "../actions/signin";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "../../../components/Header/Header.js";
import HeaderLinks from "../../../components/Header/HeaderLinks.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
// import RegisterPage from "../RegisterPage/RegisterPage";
import styles from "../../../assets/jss/material-kit-react/views/loginPage.js";
import image from "../../../assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

function SignUp(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const { ...rest } = props;

    const [user, setUser] = useState('');
    console.log("Here I am " + user);
    console.log("Here I am " + props);

    function handleSubmit(e) {
        // e.preventDefault();
        console.log(document.querySelector("#email").value);
        const newUser = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
            key: Date.now()
        }
        console.log(newUser);
        props.createUser(newUser);
        setUser(newUser);
    }

    function addUserFire() {
        const newUser = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
            key: Date.now()
        }
        console.log(newUser);
        return firestoreDB.collection("users").add(newUser)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("You Have Been Successfully Signed Up!");
                reset("blogForm");
            }).catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    const classes = useStyles();
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="DU Fitness"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form} onSubmit={() => {
                                    handleSubmit();
                                    addUserFire();
                                }} >
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Sign Up</h4>
                                    </CardHeader>
                                    <p className={classes.divider}>Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Email"
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="password"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg" type="submit" value="Create account" >
                                            Sign Up!
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}

const mapDispatchToProps = {
  createUser
};

export default connect(createUser, mapDispatchToProps)(SignUp)