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
	const { localStream, remoteStreams, screenSharingStream } = useSelector(
		state => state.room,
	);

	return (
		<MainContainer>
			<Video
				stream={screenSharingStream ? screenSharingStream : localStream}
				isLocalStream
			/>
			{remoteStreams.map(stream => (
				<Video stream={stream} />
			))}
		</MainContainer>
	);
};

export default VideosContainer;
