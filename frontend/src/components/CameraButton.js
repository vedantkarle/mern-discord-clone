import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const CameraButton = () => {
	const [cameraEnabled, setCameraEnabled] = useState(true);

	return (
		<IconButton
			style={{ color: "white" }}
			onClick={() => setCameraEnabled(!cameraEnabled)}>
			{cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
		</IconButton>
	);
};

export default CameraButton;
