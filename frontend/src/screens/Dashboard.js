import { styled } from "@mui/system";
import decode from "jwt-decode";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppBar from "../components/AppBar";
import FriendsSidebar from "../components/FriendsSidebar";
import Messenger from "../components/Messenger";
import Room from "../components/Room";
import Sidebar from "../components/Sidebar";
import { connectWithSocketServer } from "../socket/socketConnection";
import { logout } from "../utils/auth";

const Wrapper = styled("div")({
	width: "100%",
	height: "100vh",
	display: "flex",
});

const Dashboard = () => {
	const { isUserInRoom } = useSelector(state => state.room);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user) {
			return (window.location.pathname = "/login");
		}
		const token = user?.token;
		if (user && token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
		}
	}, []);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			connectWithSocketServer(user);
		}
	}, []);

	return (
		<Wrapper>
			<Sidebar />
			<FriendsSidebar />
			<Messenger />
			<AppBar />
			{isUserInRoom && <Room />}
		</Wrapper>
	);
};

export default Dashboard;
