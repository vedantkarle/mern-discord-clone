import { setOpenRoom, setRoomDetails } from "../actions/roomActions";
import store from "../store";
import { createRoom } from "./socketConnection";

export const createNewRoom = () => {
	store.dispatch(setOpenRoom(true, true));
	createRoom();
};

export const newRoomCreated = data => {
	const { roomDetails } = data;
	store.dispatch(setRoomDetails(roomDetails));
};
