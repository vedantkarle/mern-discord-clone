import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Avatar from "./Avatar";

const MainContainer = styled("div")({
	width: "97%",
	display: "flex",
	marginTop: "10px",
});

const AvatarContainer = styled("div")({
	width: "70px",
});

const MessageContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
});

const MessageContent = styled("div")({
	color: "#DCDDDE",
});

const SameAuthorMessageContent = styled("div")({
	color: "#DCDDDE",
	width: "97%",
});

const SameAuthorMessageText = styled("span")({
	marginLeft: "70px",
});

const Message = ({ sameDay, sameAuthor, content, username, date, divRef }) => {
	if (sameAuthor && sameDay) {
		return (
			<SameAuthorMessageContent ref={divRef}>
				<SameAuthorMessageText>{content}</SameAuthorMessageText>
			</SameAuthorMessageContent>
		);
	}

	return (
		<MainContainer ref={divRef}>
			<AvatarContainer>
				<Avatar username={username} />
			</AvatarContainer>
			<MessageContainer>
				<Typography style={{ fontSize: "16px", color: "white" }}>
					{username}{" "}
					<span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
				</Typography>
				<MessageContent>{content}</MessageContent>
			</MessageContainer>
		</MainContainer>
	);
};

export default Message;
