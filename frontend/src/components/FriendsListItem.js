import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChosenChatDetails } from "../actions/chatActions";
import { DIRECT_CHAT } from "../constants/chatConstants";
import Avatar from "./Avatar";

const FriendsListItem = ({ friend: { id, username } }) => {
	const { onlineUsers } = useSelector(state => state.friends);
	const { chosenChatDetails } = useSelector(state => state.chat);

	const dispatch = useDispatch();
	const isOnline = onlineUsers.find(user => user.userId === id);

	const handleChooseActiveChat = () => {
		dispatch(
			setChosenChatDetails({
				chatDetails: { id, name: username },
				chatType: DIRECT_CHAT,
			}),
		);
	};

	return (
		<Button
			onClick={handleChooseActiveChat}
			style={{
				width: "100%",
				height: "42px",
				marginTop: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				textTransform: "none",
				color: "black",
				position: "relative",
				background: chosenChatDetails?.id === id ? "rgba(255,255,255,0.08)" : "none",
			}}>
			<Avatar username={username} />
			<Typography
				style={{ marginLeft: "7px", fontWeight: 700, color: "#8e9297" }}
				variant='subtitle'
				align='left'>
				{username}
			</Typography>
			{isOnline && (
				<Box
					sx={{
						color: "#3ba55d",
						display: "flex",
						alignItems: "center",
						position: "absolute",
						right: "5px",
					}}>
					<FiberManualRecordIcon />
				</Box>
			)}
		</Button>
	);
};

export default FriendsListItem;
