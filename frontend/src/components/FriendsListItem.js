import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Avatar from "./Avatar";

const FriendsListItem = ({ friend: { id, username, isOnline } }) => {
	return (
		<Button
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
