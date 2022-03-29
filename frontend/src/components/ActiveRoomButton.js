import { Button, Tooltip } from "@mui/material";
import React from "react";
import { joinRoom } from "../socket/roomHandler";
import Avatar from "./Avatar";

const ActiveRoomButton = ({
	roomId,
	creatorUsername,
	amountOfParticipants,
	isUserInRoom,
}) => {
	const handleJoinRoom = () => {
		if (amountOfParticipants < 4) {
			joinRoom(roomId);
		}
	};

	const buttonDisabled = amountOfParticipants > 3;
	const roomTitle = `Creator : ${creatorUsername}.Connected : ${amountOfParticipants}`;

	return (
		<Tooltip title={roomTitle}>
			<div>
				<Button
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
					}}
					disabled={buttonDisabled || isUserInRoom}
					onClick={handleJoinRoom}>
					<Avatar username={creatorUsername} />
				</Button>
			</div>
		</Tooltip>
	);
};

export default ActiveRoomButton;
