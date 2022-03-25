import { Alert, Box, Snackbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	acceptFriendInvitation,
	rejectFriendInvitation,
} from "../actions/friendsActions";
import Avatar from "./Avatar";
import InvitationDecisionButton from "./InvitationDecisionButton";

const PendingInvitationListItem = ({ id, sender: { username, email } }) => {
	const [buttonsDisabled, setButtonsDisabled] = useState(false);
	const [success, setSuccess] = useState(null);

	const dispatch = useDispatch();

	const handleAccceptInvitation = () => {
		dispatch(acceptFriendInvitation({ id }, setSuccess));
		setButtonsDisabled(true);
	};

	const handleRejectInvitation = () => {
		dispatch(rejectFriendInvitation({ id }, setSuccess));
		setButtonsDisabled(true);
	};

	return (
		<Tooltip title={email}>
			<div style={{ width: "100%" }}>
				<Box
					sx={{
						width: "100%",
						height: "42px",
						marginTop: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
					}}>
					<Avatar username={username} />
					<Typography
						sx={{
							marginLeft: "7px",
							fontWeight: 700,
							color: "#8e9297",
							flexGrow: 1,
						}}
						variant='subtitle1'>
						{username}
					</Typography>
					<InvitationDecisionButton
						disabled={buttonsDisabled}
						acceptInvitation={handleAccceptInvitation}
						rejectInvitation={handleRejectInvitation}
					/>
				</Box>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={success !== null}
					autoHideDuration={2000}>
					<Alert severity='success' sx={{ width: "100%" }}>
						{success}
					</Alert>
				</Snackbar>
			</div>
		</Tooltip>
	);
};

export default PendingInvitationListItem;
