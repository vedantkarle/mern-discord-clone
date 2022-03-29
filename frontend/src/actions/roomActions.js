import {
	OPEN_ROOM,
	SET_ACTIVE_ROOMS,
	SET_ROOM_DETAILS,
} from "../constants/roomConstants";

export const setOpenRoom =
	(isUserRoomCreator = false, isUserInRoom = false) =>
	dispatch => {
		dispatch({ type: OPEN_ROOM, payload: { isUserRoomCreator, isUserInRoom } });
	};

export const setRoomDetails = roomDetails => (dispatch, getState) => {
	dispatch({ type: SET_ROOM_DETAILS, payload: { roomDetails } });
};

export const setActiveRooms = activeRooms => (dispatch, getState) => {
	const friends = getState().friends.friends;

	const rooms = [];

	activeRooms.forEach(room => {
		friends.forEach(friend => {
			if (friend.id === room.roomCreator.userId) {
				rooms.push({
					...room,
					roomCreator: {
						...room?.roomCreator,
						creatorUsername: friend.username,
					},
				});
			}
		});
	});

	dispatch({ type: SET_ACTIVE_ROOMS, payload: { rooms } });
};
