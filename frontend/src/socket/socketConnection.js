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
import {
	handleParticipantLeftRoom,
	handleSignalingData,
	prepareNewPeerConnection,
} from "./webRTC";

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

	socket.on("conn-prepare", data => {
		const { connUserSocketId } = data;
		prepareNewPeerConnection(connUserSocketId, user.username, false);
		socket.emit("conn-init", { connUserSocketId });
	});

	socket.on("conn-init", data => {
		const { connUserSocketId } = data;
		prepareNewPeerConnection(connUserSocketId, user.username, true);
	});

	socket.on("conn-signal", data => {
		handleSignalingData(data);
	});

	socket.on("room-participant-left", data => {
		handleParticipantLeftRoom(data);
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

export const leaveUserRoom = data => {
	socket.emit("room-leave", data);
};

export const signalPeerData = data => {
	socket.emit("conn-signal", data);
};
