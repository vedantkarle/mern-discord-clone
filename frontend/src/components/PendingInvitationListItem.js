import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "./Avatar";
import InvitationDecisionButton from "./InvitationDecisionButton";

const PendingInvitationListItem = ({
	sender: { _id, username, email },
	acceptInvitation = () => {},
	rejectInvitation = () => {},
}) => {
	const [buttonsDisabled, setButtonsDisabled] = useState(false);

	const handleAccceptInvitation = () => {
		acceptInvitation({ _id });
		setButtonsDisabled(true);
	};

	const handleRejectInvitation = () => {
		rejectInvitation({ _id });
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
			</div>
		</Tooltip>
	);
};

export default PendingInvitationListItem;
