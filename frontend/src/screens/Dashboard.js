import { styled } from "@mui/system";
import React from "react";
import AppBar from "../components/AppBar";
import FriendsSidebar from "../components/FriendsSidebar";
import Messenger from "../components/Messenger";
import Sidebar from "../components/Sidebar";

const Wrapper = styled("div")({
	width: "100%",
	height: "100vh",
	display: "flex",
});

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<FriendsSidebar />
			<Messenger />
			<AppBar />
		</Wrapper>
	);
};

export default Dashboard;
