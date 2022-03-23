import { styled } from "@mui/system";
import React from "react";

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
	return <MainContainer>AppBar</MainContainer>;
};

export default AppBar;