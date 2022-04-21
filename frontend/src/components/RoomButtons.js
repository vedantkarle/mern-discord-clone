import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
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
	const { localStream, isUserJoinedWithOnlyAudio } = useSelector(
		state => state.room,
	);

	return (
		<MainContainer>
			{!isUserJoinedWithOnlyAudio && <ScreenShareButton />}
			<MicButton localStream={localStream} />
			{!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
			<CloseRoomButton />
		</MainContainer>
	);
};

export default RoomButtons;
