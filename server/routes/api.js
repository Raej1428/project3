const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const passport = require("passport");

// Load user mongoose models
const User = require("../models/user");


// Load input validation
const validateLoginInput = require("../validation/loginValdation");

// @route POST api/user/login
// @desc  login user
// access Public
router.post("/login", (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateLoginInput(req.body.userdata);
    const { email, password } = req.body.userdata;
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Try find a user
    User.findOne({
        email
    })
        .then(user => {
            if (user) {
                // Compare hashed passwords with bcrypt
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (isMatch) {
                        // User Matched
                        const payload = {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            typeOfUser: "user"
                        }; // Create JWT Payload
                        // Sign Token
                        jwt.sign(payload, keys.secretKey, (err, token) => {
                            if (err) console.log(err + "ERROR");
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });
                    } else {
                        console.log(`Password incorrect`);
                        errors.password = "Password incorrect";
                        return res.status(404).json(errors);
                    }
                });
            } else {
                // If both don`t found, user don`t exist
                errors.email = "User not found";
                return res.status(404).json(errors);
            }
        })
        .catch(err => console.log(err));
});

// @route 	GET /api/user/get/:id
// @desc 	get data about user, for their profile
// @access 	Private
router.get(
    "/get/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        console.log(req.params);

        User.findById(req.params.id.substring(1))
            .then(
                user => {
                    if (user) {
                        console.log("user " + user);
                        res.send(user);
                    } else res.status(400).send();
                }
            );

    })
    // .catch(err => console.log(err));
module.exports = router;