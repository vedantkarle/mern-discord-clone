import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import IconButton from "@mui/material/IconButton";
import React from "react";

const CloseRoomButton = () => {
	return (
		<IconButton style={{ color: "white" }}>
			<CancelPresentationIcon />
		</IconButton>
	);
};

export default CloseRoomButton;
