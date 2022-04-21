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
	const { localStream, remoteStreams, screenSharingStream, roomDetails } =
		useSelector(state => state.room);

	return (
		<MainContainer>
			<Video
				stream={screenSharingStream ? screenSharingStream : localStream}
				username='Me'
				isLocalStream
			/>
			{remoteStreams.map(stream => (
				<Video stream={stream} username={stream.username} />
			))}
		</MainContainer>
	);
};

export default VideosContainer;
