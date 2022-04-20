import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const MicButton = ({ localStream }) => {
	const [micEnabled, setMicEnabled] = useState(true);

	const handleToggleMute = () => {
		localStream.getAudioTracks()[0].enabled = !micEnabled;
		setMicEnabled(!micEnabled);
	};

	return (
		<IconButton style={{ color: "white" }} onClick={handleToggleMute}>
			{micEnabled ? <MicIcon /> : <MicOffIcon />}
		</IconButton>
	);
};

export default MicButton;
