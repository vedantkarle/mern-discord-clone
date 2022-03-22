import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import React from "react";

const BoxWrapper = styled("div")({
	width: "100%",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "#5865F2",
});

const AuthBox = ({ children, height }) => {
	return (
		<BoxWrapper>
			<Box
				sx={{
					width: 500,
					height: height,
					bgcolor: "#36393f",
					borderRadius: "5px",
					boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
					display: "flex",
					flexDirection: "column",
					padding: "35px",
				}}>
				{children}
			</Box>
		</BoxWrapper>
	);
};

export default AuthBox;
