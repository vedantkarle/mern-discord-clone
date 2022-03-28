import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { getDirectChatHistory } from "../socket/socketConnection";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
	flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
	useEffect(() => {
		getDirectChatHistory({
			receiverId: chosenChatDetails?.id,
		});
	}, [chosenChatDetails]);

	return (
		<Wrapper>
			<Messages />
			<NewMessageInput />
		</Wrapper>
	);
};

export default MessengerContent;
