import {
	OPEN_ROOM,
	SET_ACTIVE_ROOMS,
	SET_AUDIO_ONLY,
	SET_LOCAL_STREAM,
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
	const { _id: userId } = getState()?.auth?.user;

	const rooms = [];

	activeRooms.forEach(room => {
		const isRoomCreatedByMe = room.roomCreator.userId === userId;

		if (isRoomCreatedByMe) {
			rooms.push({
				...room,
				roomCreator: {
					...room?.roomCreator,
					creatorUsername: "Me",
				},
			});
		} else {
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
		}
	});

	dispatch({ type: SET_ACTIVE_ROOMS, payload: { rooms } });
};

export const setLocalStream = stream => dispatch => {
	dispatch({ type: SET_LOCAL_STREAM, payload: { localStream: stream } });
};

export const setAudioOnly = audioOnly => dispatch => {
	dispatch({ type: SET_AUDIO_ONLY, payload: { audioOnly } });
};
