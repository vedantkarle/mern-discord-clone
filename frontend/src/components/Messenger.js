import { styled } from "@mui/system";
import React from "react";

const MainContainer = styled("div")({
	flexGrow: 1,
	backgroundColor: "#36393f",
	marginTop: "48px",
	display: "flex",
});

const Messenger = () => {
	return <MainContainer>Messenger</MainContainer>;
};

export default Messenger;
