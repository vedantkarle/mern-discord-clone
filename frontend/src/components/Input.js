import { styled } from "@mui/system";
import React from "react";

const Wrapper = styled("div")({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	width: "100%",
	marginTop: "16px",
});

const Label = styled("p")({
	color: "#b9bbbe",
	textTransform: "uppercase",
	fontWeight: "bold",
	fontSize: "12px",
});

const InputField = styled("input")({
	flexGrow: 1,
	height: "40px",
	border: "1px solid #222",
	borderRadius: "4px",
	color: "#dcddde",
	textTransform: "lowercase",
	background: "#32343a",
	marginTop: "5px",
	fontSize: "16px",
	padding: "0 5px",
	"&:focus": {
		border: "1px solid #5865F2",
	},
});

const Input = ({ label, value, setValue, type }) => {
	const handleChange = e => {
		const { value } = e.target;
		setValue(value);
	};

	return (
		<Wrapper>
			<Label>{label}</Label>
			<InputField value={value} type={type} onChange={handleChange} />
		</Wrapper>
	);
};

export default Input;
