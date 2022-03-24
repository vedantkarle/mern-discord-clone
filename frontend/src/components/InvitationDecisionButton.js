import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import React from "react";

const InvitationDecisionButton = ({
	disabled,
	acceptInvitation,
	rejectInvitation,
}) => {
	return (
		<Box sx={{ display: "flex" }}>
			<IconButton
				style={{
					color: "white",
				}}
				disabled={disabled}
				onClick={acceptInvitation}>
				<CheckIcon />
			</IconButton>
			<IconButton
				style={{
					color: "white",
				}}
				disabled={disabled}
				onClick={rejectInvitation}>
				<ClearIcon />
			</IconButton>
		</Box>
	);
};

export default InvitationDecisionButton;
