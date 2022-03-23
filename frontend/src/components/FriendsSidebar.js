import { styled } from "@mui/system";
import React from "react";
import AddFriendButton from "./AddFriendButton";
import FriendsList from "./FriendsList";
import FriendsListTitle from "./FriendsListTitle";
import PendingInvitations from "./PendingInvitations";

const MainContainer = styled("div")({
	width: "224px",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#2F3136",
});

const FriendsSidebar = () => {
	return (
		<MainContainer>
			<AddFriendButton />
			<FriendsListTitle title='Private Messages' />
			<FriendsList />
			<FriendsListTitle title='Invitations' />
			<PendingInvitations />
		</MainContainer>
	);
};

export default FriendsSidebar;
