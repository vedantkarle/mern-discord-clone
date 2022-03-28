import { styled } from "@mui/system";
import React from "react";

const Separator = styled("div")({
	width: "95%",
	backgroundColor: "#b9bbbe",
	height: "1px",
	position: "relative",
	marginTop: "20px",
	marginBottom: "10px",
});

const DateLabel = styled("span")({
	position: "absolute",
	backgroundColor: "#36393f",
	left: "45%",
	top: "-10px",
	color: "#b9bbbe",
	padding: "0 5px",
	fontSize: "14px",
});

const DateSeparator = ({ date }) => {
	return (
		<Separator>
			<DateLabel>{date}</DateLabel>
		</Separator>
	);
};

export default DateSeparator;
