import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import React from "react";

const MainContainer = styled("div")({
	position: "absolute",
	bottom: "10px",
	right: "10px",
});

const RoomResizeButton = ({ isRoomMinimized, setIsRoomMinimized }) => {
	return (
		<MainContainer>
			<IconButton
				style={{ color: "white" }}
				onClick={() => setIsRoomMinimized(!isRoomMinimized)}>
				{isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
			</IconButton>
		</MainContainer>
	);
};

export default RoomResizeButton;
