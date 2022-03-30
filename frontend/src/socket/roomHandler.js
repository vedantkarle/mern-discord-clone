import { setOpenRoom, setRoomDetails } from "../actions/roomActions";
import store from "../store";
import { createRoom, joinUserRoom, leaveUserRoom } from "./socketConnection";
import { getLocalStreamPreview } from "./webRTC";

export const createNewRoom = () => {
	const successCallbackFunc = () => {
		store.dispatch(setOpenRoom(true, true));
		createRoom();
	};

	getLocalStreamPreview(false, successCallbackFunc);
};

export const newRoomCreated = data => {
	const { roomDetails } = data;
	store.dispatch(setRoomDetails(roomDetails));
};

export const joinRoom = roomId => {
	const room = store
		.getState()
		.room.activeRooms.find(room => room.roomId === roomId);

	const successCallbackFunc = () => {
		store.dispatch(setRoomDetails(room));
		store.dispatch(setOpenRoom(false, true));
		joinUserRoom({ roomId });
	};

	getLocalStreamPreview(false, successCallbackFunc);
};

export const leaveRoom = () => {
	const roomId = store.getState().room.roomDetails.roomId;
	leaveUserRoom({ roomId });

	store.dispatch(setRoomDetails(null));
	store.dispatch(setOpenRoom(false, false));
};
