import { styled } from "@mui/system";
import React from "react";
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
	return (
		<MainContainer>
			<MainPageButton />
			<CreateRoomButton />
		</MainContainer>
	);
};

export default Sidebar;
