import { styled } from "@mui/system";
import React from "react";

const MainContainer = styled("div")({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto",
});

const PendingInvitations = () => {
	return <MainContainer>PendingInvitations</MainContainer>;
};

export default PendingInvitations;
