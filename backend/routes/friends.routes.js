const express = require("express");
const router = express.Router();
const Joi = require("joi");
const {
	friendInvitation,
	acceptInvitation,
	rejectInvitation,
} = require("../controllers/friends.controller");
const validator = require("express-joi-validation").createValidator({});
const { verifyToken } = require("../middleware/auth");

const friendInvitationSchema = Joi.object({
	email: Joi.string().email().required(),
});

const inviteDecisionSchema = Joi.object({
	id: Joi.string().required(),
});

router.post(
	"/invite",
	verifyToken,
	validator.body(friendInvitationSchema),
	friendInvitation,
);

router.post(
	"/invitation/accept",
	verifyToken,
	validator.body(inviteDecisionSchema),
	acceptInvitation,
);

router.post(
	"/invitation/reject",
	verifyToken,
	validator.body(inviteDecisionSchema),
	rejectInvitation,
);

module.exports = router;
