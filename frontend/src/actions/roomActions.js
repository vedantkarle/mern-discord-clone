import { OPEN_ROOM } from "../constants/roomConstants";

export const setOpenRoom =
	(isUserRoomCreator = false, isUserInRoom = false) =>
	dispatch => {
		dispatch({ type: OPEN_ROOM, payload: { isUserRoomCreator, isUserInRoom } });
	};
