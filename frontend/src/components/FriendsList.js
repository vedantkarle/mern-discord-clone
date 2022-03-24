import { styled } from "@mui/system";
import React from "react";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
	{
		id: 1,
		username: "Mark",
		isOnline: true,
	},
	{
		id: 2,
		username: "Annak",
		isOnline: true,
	},
	{
		id: 3,
		username: "John",
		isOnline: false,
	},
];

const MainContainer = styled("div")({
	flexGrow: 1,
	width: "100%",
});

const FriendsList = () => {
	return (
		<MainContainer>
			{DUMMY_FRIENDS.map(f => (
				<FriendsListItem key={f.id} friend={f} />
			))}
		</MainContainer>
	);
};

export default FriendsList;
