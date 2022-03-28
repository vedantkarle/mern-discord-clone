import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import MessagesHeader from "./MessagesHeader";

const MainContainer = styled("div")({
	height: "calc(100% - 60px)",
	overflow: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

const DUMMY_MESSAGES = [
	{
		id: 1,
		content: "Hello",
		sameAuthor: false,
		author: { username: "janedoe" },
		date: "22/01/2022",
		sameDay: false,
	},
	{
		id: 2,
		content: "Hello again!",
		sameAuthor: false,
		author: { username: "vedantk" },
		date: "22/01/2022",
		sameDay: true,
	},
	{
		id: 3,
		content: "Hello",
		sameAuthor: false,
		author: { username: "janedoe" },
		date: "23/01/2022",
		sameDay: false,
	},
	{
		id: 4,
		content: "Hello",
		sameAuthor: true,
		author: { username: "janedoe" },
		date: "23/01/2022",
		sameDay: true,
	},
];

const Messages = () => {
	const { chosenChatDetails, messages } = useSelector(state => state.chat);

	return (
		<MainContainer>
			<MessagesHeader name={chosenChatDetails?.name} />
			{DUMMY_MESSAGES.map((message, index) => (
				<Message
					key={index}
					content={message.content}
					username={message.author.username}
					sameAuthor={message.sameAuthor}
					date={message.date}
					sameDay={message.sameDay}
				/>
			))}
		</MainContainer>
	);
};

export default Messages;
