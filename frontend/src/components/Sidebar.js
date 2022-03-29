import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";
import CreateRoomButton from "./CreateRoomButton";
import MainPageButton from "./MainPageButton";

const MainContainer = styled("div")({
	width: "72px",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#202225",
});

const Sidebar = () => {
	const { activeRooms, isUserInRoom } = useSelector(state => state.room);

	return (
		<MainContainer>
			<MainPageButton />
			<CreateRoomButton />
			{activeRooms?.map((room, i) => (
				<ActiveRoomButton
					key={i}
					roomId={room.roomId}
					creatorUsername={room.roomCreator.creatorUsername}
					amountOfParticipants={room.participants.length}
					isUserInRoom={isUserInRoom}
				/>
			))}
		</MainContainer>
	);
};

export default Sidebar;
