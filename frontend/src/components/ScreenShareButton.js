import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const ScreenShareButton = () => {
	const [screenShareEnabled, setScreenShareEnabled] = useState(true);

	return (
		<IconButton
			style={{ color: "white" }}
			onClick={() => setScreenShareEnabled(!screenShareEnabled)}>
			{screenShareEnabled ? <ScreenShareIcon /> : <StopScreenShareIcon />}
		</IconButton>
	);
};

export default ScreenShareButton;
