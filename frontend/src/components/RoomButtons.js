import { styled } from "@mui/system";
import React from "react";
import CameraButton from "./CameraButton";
import CloseRoomButton from "./CloseRoomButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";

const MainContainer = styled("div")({
	height: "15%",
	width: "100%",
	backgroundColor: "#5865f2",
	borderTopLeftRadius: "8px",
	borderTopRightRadius: "8px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const RoomButtons = () => {
	return (
		<MainContainer>
			<ScreenShareButton />
			<MicButton />
			<CameraButton />
			<CloseRoomButton />
		</MainContainer>
	);
};

export default RoomButtons;
