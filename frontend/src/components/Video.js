import { styled } from "@mui/system";
import React, { useEffect, useRef } from "react";

const MainContainer = styled("div")({
	height: "50%",
	width: "50%",
	backgroundColor: "black",
	borderRadius: "8px",
	position: "relative",
});

const VideoElement = styled("video")({
	width: "100%",
	height: "100%",
});

const VideoName = styled("span")({
	position: "absolute",
	bottom: "0",
	left: "0",
	padding: "5px",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	color: "white",
	fontWeight: "bold",
});

const Video = ({ stream, isLocalStream, username }) => {
	const videoRef = useRef();

	useEffect(() => {
		const video = videoRef.current;
		video.srcObject = stream;

		video.onloadedmetadata = () => {
			video.play();
		};
	}, [stream]);

	return (
		<MainContainer>
			<VideoElement
				ref={videoRef}
				autoPlay
				muted={isLocalStream ? true : false}
			/>
			<VideoName>{username}</VideoName>
		</MainContainer>
	);
};

export default Video;
