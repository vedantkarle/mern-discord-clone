import { styled } from "@mui/system";
import React, { useState } from "react";
import RoomButtons from "./RoomButtons";
import RoomResizeButton from "./RoomResizeButton";
import VideosContainer from "./VideosContainer";

const MainContainer = styled("div")({
	position: "absolute",
	borderRadius: "8px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#202225",
});

const fullScreenRoomStyle = {
	width: "100%",
	height: "100vh",
};

const minimizedRoomStyle = {
	bottom: 0,
	right: 0,
	width: "30%",
	height: "40vh",
};

const Room = () => {
	const [isRoomMinimized, setIsRoomMinimized] = useState(true);

	return (
		<MainContainer
			style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
			<VideosContainer />
			<RoomButtons />
			<RoomResizeButton
				isRoomMinimized={isRoomMinimized}
				setIsRoomMinimized={setIsRoomMinimized}
			/>
		</MainContainer>
	);
};

export default Room;
