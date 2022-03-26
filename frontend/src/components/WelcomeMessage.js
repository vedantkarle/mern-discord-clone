import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Wrapper = styled("div")({
	flexGrow: 1,
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const WelcomeMessage = () => {
	return (
		<Wrapper>
			<Typography variant='h6' sx={{ color: "white" }}>
				To start chatting - choose conversation
			</Typography>
		</Wrapper>
	);
};

export default WelcomeMessage;
