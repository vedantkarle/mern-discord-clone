import io from "socket.io-client";
import {
	setFriends,
	setOnlineUsers,
	setPendingInvitations,
} from "../actions/friendsActions";
import { setActiveRooms } from "../actions/roomActions";
import store from "../store";
import { updateDirectChatHistoryIfActive } from "../utils/chat";
import { newRoomCreated } from "./roomHandler";

let socket = null;

export const connectWithSocketServer = user => {
	socket = io("http://localhost:5000", {
		auth: {
			token: user?.token,
		},
	});

	socket.on("connect", () => {
		console.log("Client connected to socket");
	});

	socket.on("friends-invitations", data => {
		const { pendingInvitations } = data;
		store.dispatch(setPendingInvitations(pendingInvitations));
	});

	socket.on("friends-list", data => {
		const { friends } = data;
		store.dispatch(setFriends(friends));
	});

	socket.on("online-users", data => {
		const { onlineUsers } = data;
		store.dispatch(setOnlineUsers(onlineUsers));
	});

	socket.on("direct-chat-history", data => {
		updateDirectChatHistoryIfActive(data);
	});

	socket.on("room-create", data => {
		newRoomCreated(data);
	});

	socket.on("active-rooms", data => {
		store.dispatch(setActiveRooms(data));
	});
};

export const sendDirectMessage = data => {
	socket.emit("direct-message", data);
};

export const getDirectChatHistory = data => {
	socket.emit("direct-chat-history", data);
};

export const createRoom = () => {
	socket.emit("room-create");
};

export const joinUserRoom = data => {
	socket.emit("room-join", data);
};
