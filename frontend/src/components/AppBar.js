import { styled } from "@mui/system";
import React from "react";
import ChosenChatLabel from "./ChosenChatLabel";
import DropdownMenu from "./DropownMenu";

const MainContainer = styled("div")({
	position: "absolute",
	right: 0,
	top: 0,
	height: "48px",
	borderBottom: "2px solid #303338",
	backgroundColor: "#36393f",
	width: "calc(100% - 296px)",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 15px",
});

const AppBar = () => {
	return (
		<MainContainer>
			<ChosenChatLabel />
			<DropdownMenu />
		</MainContainer>
	);
};

export default AppBar;
