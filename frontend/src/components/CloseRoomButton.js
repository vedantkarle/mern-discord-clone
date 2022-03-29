import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { leaveRoom } from "../socket/roomHandler";

const CloseRoomButton = () => {
	return (
		<IconButton style={{ color: "white" }} onClick={leaveRoom}>
			<CancelPresentationIcon />
		</IconButton>
	);
};

export default CloseRoomButton;
