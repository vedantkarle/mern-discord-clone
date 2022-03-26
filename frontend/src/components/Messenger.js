import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import MessengerContent from "./MessengerContent";
import WelcomeMessage from "./WelcomeMessage";

const MainContainer = styled("div")({
	flexGrow: 1,
	backgroundColor: "#36393f",
	marginTop: "48px",
	display: "flex",
});

const Messenger = () => {
	const { chosenChatDetails } = useSelector(state => state.chat);

	return (
		<MainContainer>
			{!chosenChatDetails ? (
				<WelcomeMessage />
			) : (
				<MessengerContent chosenChatDetails={chosenChatDetails} />
			)}
		</MainContainer>
	);
};

export default Messenger;
