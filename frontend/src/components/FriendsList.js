import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import FriendsListItem from "./FriendsListItem";

const MainContainer = styled("div")({
	flexGrow: 1,
	width: "100%",
});

const FriendsList = () => {
	const { friends } = useSelector(state => state.friends);

	return (
		<MainContainer>
			{friends?.map(f => (
				<FriendsListItem key={f.id} friend={f} />
			))}
		</MainContainer>
	);
};

export default FriendsList;
