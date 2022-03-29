import { OPEN_ROOM } from "../constants/roomConstants";

const initState = {
	isUserInRoom: false,
	isUserRoomCreator: false,
	roomDetails: null,
	activeRooms: [],
	localStream: null,
	remoteStreams: [],
	audioOnly: false,
	screenSharingStream: null,
	isScreenSharingActive: false,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case OPEN_ROOM:
			return {
				...state,
				isUserInRoom: action.payload.isUserInRoom,
				isUserRoomCreator: action.payload.isUserRoomCreator,
			};
		default:
			return state;
	}
};

export default reducer;
