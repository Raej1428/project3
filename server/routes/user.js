const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const mongoose = require("mongoose");

// Load User and user mongoose models
const User = require("../models/user");

// Load validation
const validateRegisterInput = require("../validation/registerValidation");

// @route 	POST /api/users/register
// @desc 	Register new user
// @access 	Public
router.post("/register", (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body.userdata);
	// Check validation of input
	if (!isValid) {
		return res.status(400).json(errors);
	}

	user.findOne({ email: req.body.userdata.email })
		.then(user => {
			// If finded user, user already exists
			if (user) {
				errors.email = "Email already exists";
				return res.status(400).json(errors);
			} else {
				// If not, create new user
				const newuser = new User({
					firstName: req.body.userdata.firstName,
					lastName: req.body.userdata.lastName,
					email: req.body.userdata.email,
					password: req.body.userdata.password,
					typeOfUser: req.body.userdata.typeOfUser,
					color: req.body.userdata.color,
					settings: {},
					appointments: {
						monday: [],
						tuesday: [],
						wednesday: [],
						thursday: [],
						friday: []
					}
				});
				// Hash password with bcrypt
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newuser.password, salt, (err, hash) => {
						if (err) throw err;
						newuser.password = hash;
						newuser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		})
		.catch(err => console.log(err));
});

// @route 	POST /api/users/updateSettings
// @desc 	Update, set settings for user
// @access 	Private
router.post(
	"/updateSettings",
	passport.authenticate("jwt", {
		session: false
	}),
	(req, res) => {
		const { settings, user } = req.body;
		user.findById(user)
			.then(user => {
				if (user) {
					user.settings = settings;
					user.save();
				}
			})
			.catch(err => console.log(err));
	}
);

// @route 	GET /api/users/:id
// @desc 	Fetch user
// @access 	Private
router.get(
	"/:id",
	passport.authenticate("jwt", {
		session: false
	}),
	(req, res) => {
		User.findById(req.params.id)
			.then(user => {
				// Convert data from coreMongooseArray to normal view
				let monData = user.map(
					elem => new mongoose.Types.ObjectId(elem._id)
				);
				// Find each User
				User.find(
					{
						_id: {
							$in: monData
						}
					},
					(err, Users) => {
						if (err) console.log(err);
						res.send(Users);
					}
				);
			})
			.catch(err => console.log(err));
	}
);

// @route 	POST /api/users/setrecepie
// @desc 	Set recepie record for given user
// @access 	Private
router.post(
	"/setrecepie",
	passport.authenticate("jwt", {
		session: false
	}),
	(req, res) => {
		const { recepie, userID } = req.body;
		user.findById(userID).then(user => {
			if (user) {
				user.recepies.push(recepie);
				user.save();
			}
		});
	}
);

// @route 	GET /api/users/recepies/:id
// @desc 	Get all of user`s recepies records. Using for both sides
// @access 	Private
router.get(
	"/recepies/:id",
	passport.authenticate("jwt", {
		session: false
	}),
	(req, res) => {
		user.findById(req.params.id).then(user => {
			if (user) {
				res.send(user.recepies);
			}
		});
	}
);

// @route 	POST /api/users/unsubscribe
// @desc 	Unregister user
// @access 	Private
router.post(
	"/unsubscribe",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { userID} = req.body;
		User.findById(userID)
			.then(user => {
				for (let i = 0; i < user.length; i++) {
					if (
						user._id.toString()
					) {
						user.splice(i, 1);
					}
				}
				user.save();
			})
			.catch(err => console.log(err));
	}
);

module.exports = router;