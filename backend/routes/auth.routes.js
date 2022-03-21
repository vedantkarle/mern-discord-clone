const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const { verifyToken } = require("../middleware/auth");

const registerSchema = Joi.object({
	username: Joi.string().min(3).max(12).required(),
	password: Joi.string().min(6).required(),
	email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().email().required(),
});

router.post("/register", validator.body(registerSchema), register);
router.post("/login", validator.body(loginSchema), login);

module.exports = router;
