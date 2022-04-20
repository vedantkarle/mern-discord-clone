import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const CameraButton = ({ localStream }) => {
	const [cameraEnabled, setCameraEnabled] = useState(true);

	const handleToggleCamera = () => {
		localStream.getVideoTracks()[0].enabled = !cameraEnabled;
		setCameraEnabled(!cameraEnabled);
	};

	return (
		<IconButton style={{ color: "white" }} onClick={handleToggleCamera}>
			{cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
		</IconButton>
	);
};

export default CameraButton;
