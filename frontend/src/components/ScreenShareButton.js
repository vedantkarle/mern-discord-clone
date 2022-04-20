import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_SHARE_STREAM } from "../constants/roomConstants";
import { switchOutgoingTracks } from "../socket/webRTC";

const constraints = {
	audio: false,
	video: true,
};

const ScreenShareButton = () => {
	const [screenShareEnabled, setScreenShareEnabled] = useState(true);

	const { localStream, isScreenSharingActive, screenSharingStream } =
		useSelector(state => state.room);

	const dispatch = useDispatch();

	const handleScreenShareToggle = async () => {
		if (!isScreenSharingActive) {
			let stream = null;
			try {
				stream = await navigator.mediaDevices.getDisplayMedia(constraints);
			} catch (error) {
				console.error(error);
			}
			if (stream) {
				dispatch({
					type: SET_SCREEN_SHARE_STREAM,
					payload: {
						stream,
						isScreenSharingActive: true,
					},
				});
				switchOutgoingTracks(stream);
			}
		} else {
			switchOutgoingTracks(localStream);
			screenSharingStream.getTracks().forEach(track => track.stop());
			dispatch({
				type: SET_SCREEN_SHARE_STREAM,
				payload: {
					stream: null,
					isScreenSharingActive: false,
				},
			});
		}
	};

	return (
		<IconButton style={{ color: "white" }} onClick={handleScreenShareToggle}>
			{screenShareEnabled ? <ScreenShareIcon /> : <StopScreenShareIcon />}
		</IconButton>
	);
};

export default ScreenShareButton;
