import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import DateSeparator from "./DateSeparator";
import Message from "./Message";
import MessagesHeader from "./MessagesHeader";

const MainContainer = styled("div")({
	height: "calc(100% - 60px)",
	overflow: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

const convertDateToHumanReadable = (date, format) => {
	const map = {
		mm: date.getMonth() + 1,
		dd: date.getDate(),
		yy: date.getFullYear().toString().slice(-2),
		yyyy: date.getFullYear(),
	};

	return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched]);
};

const Messages = () => {
	const { chosenChatDetails, messages } = useSelector(state => state.chat);

	return (
		<MainContainer>
			<MessagesHeader name={chosenChatDetails?.name} />
			{messages?.map((message, index) => {
				const sameAuthor =
					index > 0 && message.author._id === messages[index - 1]?.author._id;

				const sameDay =
					index > 0 &&
					convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
						convertDateToHumanReadable(
							new Date(messages[index - 1]?.date),
							"dd/mm/yy",
						);

				return (
					<div key={index} style={{ width: "97%" }}>
						{(!sameDay || index === 0) && (
							<DateSeparator
								date={convertDateToHumanReadable(
									new Date(message?.date),
									"dd/mm/yy",
								)}
							/>
						)}
						<Message
							content={message.content}
							username={message.author.username}
							sameAuthor={sameAuthor}
							date={convertDateToHumanReadable(
								new Date(message?.date),
								"dd/mm/yy",
							)}
							sameDay={sameDay}
						/>
					</div>
				);
			})}
		</MainContainer>
	);
};

export default Messages;
