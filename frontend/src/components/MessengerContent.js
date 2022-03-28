import { styled } from "@mui/system";
import React from "react";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
	flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
	return (
		<Wrapper>
			<Messages />
			<NewMessageInput />
		</Wrapper>
	);
};

export default MessengerContent;
