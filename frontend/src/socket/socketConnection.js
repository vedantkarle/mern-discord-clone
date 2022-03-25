import io from "socket.io-client";
import { setFriends, setPendingInvitations } from "../actions/friendsActions";
import store from "../store";

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
};
