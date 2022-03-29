import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const MicButton = () => {
	const [micEnabled, setMicEnabled] = useState(true);

	return (
		<IconButton
			style={{ color: "white" }}
			onClick={() => setMicEnabled(!micEnabled)}>
			{micEnabled ? <MicIcon /> : <MicOffIcon />}
		</IconButton>
	);
};

export default MicButton;
