import { Button } from "@mui/material";
import React from "react";

const Btn = ({ label, additionalStyles, disabled, onClick, type, loading }) => {
	return (
		<Button
			type={type}
			variant='contained'
			sx={{
				bgcolor: "#5865F2",
				color: "white",
				textTransform: "none",
				fontSize: "16px",
				fontWeight: 500,
				height: "40px",
				marginTop: "20px",
				width: "100%",
			}}
			style={additionalStyles || {}}
			disabled={disabled}
			onClick={onClick}
			loading={loading}>
			{label}
		</Button>
	);
};

export default Btn;
