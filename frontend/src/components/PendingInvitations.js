import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import PendingInvitationListItem from "./PendingInvitationListItem";

const MainContainer = styled("div")({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto",
});

const PendingInvitations = () => {
	const { pendingInvitations } = useSelector(state => state.friends);

	return (
		<MainContainer>
			{pendingInvitations?.map(i => (
				<PendingInvitationListItem key={i._id} id={i._id} sender={i.senderId} />
			))}
		</MainContainer>
	);
};

export default PendingInvitations;
