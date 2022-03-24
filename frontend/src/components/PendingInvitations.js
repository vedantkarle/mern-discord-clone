import { styled } from "@mui/system";
import React from "react";
import PendingInvitationListItem from "./PendingInvitationListItem";

const DUMMY_INVITATIONS = [
	{
		_id: 1,
		sender: {
			username: "Mark",
			email: "dummy@ad.com",
		},
	},
	{
		_id: 2,
		sender: {
			username: "Mark",
			email: "dummy@ad.com",
		},
	},
	{
		_id: 3,
		sender: {
			username: "Mark",
			email: "dummy@ad.com",
		},
	},
];

const MainContainer = styled("div")({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto",
});

const PendingInvitations = () => {
	return (
		<MainContainer>
			{DUMMY_INVITATIONS.map(i => (
				<PendingInvitationListItem key={i._id} sender={i.sender} />
			))}
		</MainContainer>
	);
};

export default PendingInvitations;
