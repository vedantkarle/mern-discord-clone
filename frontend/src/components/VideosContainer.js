import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Video from "./Video";

const MainContainer = styled("div")({
	height: "85%",
	width: "100%",
	display: "flex",
	flexWrap: "wrap",
});

const VideosContainer = () => {
	const { localStream } = useSelector(state => state.room);

	console.log(localStream);

	return (
		<MainContainer>
			<Video stream={localStream} isLocalStream />
		</MainContainer>
	);
};

export default VideosContainer;
