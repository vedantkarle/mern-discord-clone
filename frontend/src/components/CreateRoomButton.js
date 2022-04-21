import VideoCallIcon from "@mui/icons-material/VideoCall";
import Button from "@mui/material/Button";
import React from "react";
import { useSelector } from "react-redux";
import { createNewRoom } from "../socket/roomHandler";

const CreateRoomButton = () => {
	const { isUserInRoom } = useSelector(state => state.room);

	const createRoomHandler = () => {
		createNewRoom();
	};

	return (
		<Button
			disabled={isUserInRoom}
			onClick={createRoomHandler}
			style={{
				width: "48px",
				height: "48px",
				borderRadius: "16px",
				margin: 0,
				padding: 0,
				minWidth: 0,
				marginTop: "10px",
				color: "#fff",
				backgroundColor: "#5865F2",
			}}>
			<VideoCallIcon />
		</Button>
	);
};

export default CreateRoomButton;
