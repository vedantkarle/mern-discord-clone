import { Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
	return (
		<Typography
			variant='h5'
			sx={{
				color: "white",
				textAlign: "center",
				fontWeight: "bold",
			}}>
			{title}
		</Typography>
	);
};

export default Header;
