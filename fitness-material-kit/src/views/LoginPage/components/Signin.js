import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/signin";
import { Redirect } from "react-router-dom";
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

export default function Signin(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [routeRedirect, setRedirect] = useState("");
    const dispatch = useDispatch();
    const createUserAction = (email, password) => dispatch(createUser(email, password));

    const signin = async (event) => {
        event.preventDefault()
        if (email !== "" && password !== "") {
            console.log("creating user");
            createUserAction(email, password);
            console.log(email, password);
            setRedirect(true);
        } else {
            console.log("need to fill the credentials")
        }

    }

    const redirectTo = routeRedirect;
    if (redirectTo) {
        return <Redirect to="/" />
    }

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
                                <form className={classes.form} onSubmit={signin}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Sign Up</h4>
                                    </CardHeader>
                                    <p className={classes.divider}>Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                name: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            value={password}
                                            onChange={(event) => {setPassword(event.target.value)}}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                name: "password",
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