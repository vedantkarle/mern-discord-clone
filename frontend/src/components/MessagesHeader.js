import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Avatar from "./Avatar";

const MainContainer = styled("div")({
	width: "98%",
	display: "flex",
	flexDirection: "column",
	marginTop: "10px",
});

const MessagesHeader = ({ name }) => {
	return (
		<MainContainer>
			<Avatar username={name} large />
			<Typography
				variant='h4'
				sx={{
					fontWeight: "bold",
					color: "white",
					marginLeft: "5px",
					marginRight: "5px",
					marginTop: "10px",
				}}>
				{name}
			</Typography>
			<Typography
				sx={{
					color: "#b9bbbe",
					marginLeft: "5px",
					marginRight: "5px",
					marginTop: "5px",
				}}>
				This is beginning of your conversation with {name}
			</Typography>
		</MainContainer>
	);
};

export default MessagesHeader;
