import { styled } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
	height: "60px",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const Input = styled("input")({
	backgroundColor: "#2f3136",
	width: "98%",
	height: "44px",
	color: "white",
	border: "none",
	outline: "none",
	borderRadius: "8px",
	fontSize: "14px",
	padding: "0 10px",
});

const NewMessageInput = () => {
	const [message, setMessage] = useState("");

	const { chosenChatDetails } = useSelector(state => state.chat);

	const handleChange = e => {
		setMessage(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === "Enter") {
			handleSendMessage();
		}
	};

	const handleSendMessage = () => {
		setMessage("");
	};

	return (
		<MainContainer>
			<Input
				placeholder={`Write message to ${chosenChatDetails?.name}`}
				value={message}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</MainContainer>
	);
};

export default NewMessageInput;
