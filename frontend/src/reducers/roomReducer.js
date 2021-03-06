import {
	OPEN_ROOM,
	SET_ACTIVE_ROOMS,
	SET_AUDIO_ONLY,
	SET_IS_USER_JOINED_AUDIO_ONLY,
	SET_LOCAL_STREAM,
	SET_REMOTE_STREAMS,
	SET_ROOM_DETAILS,
	SET_SCREEN_SHARE_STREAM,
} from "../constants/roomConstants";

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
	isUserJoinedWithOnlyAudio: false,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case OPEN_ROOM:
			return {
				...state,
				isUserInRoom: action.payload.isUserInRoom,
				isUserRoomCreator: action.payload.isUserRoomCreator,
			};
		case SET_ROOM_DETAILS:
			return {
				...state,
				roomDetails: action.payload.roomDetails,
			};
		case SET_ACTIVE_ROOMS:
			return {
				...state,
				activeRooms: action.payload.rooms,
			};
		case SET_LOCAL_STREAM:
			return {
				...state,
				localStream: action.payload.localStream,
			};
		case SET_REMOTE_STREAMS:
			return {
				...state,
				remoteStreams: action.payload.remoteStreams,
			};
		case SET_AUDIO_ONLY:
			return {
				...state,
				audioOnly: action.payload.audioOnly,
			};
		case SET_SCREEN_SHARE_STREAM:
			return {
				...state,
				isScreenSharingActive: action.payload.isScreenSharingActive,
				screenSharingStream: action.payload.stream || null,
			};
		case SET_IS_USER_JOINED_AUDIO_ONLY:
			return {
				...state,
				isUserJoinedWithOnlyAudio: action.payload.isUserJoinedWithOnlyAudio,
			};
		default:
			return state;
	}
};

export default reducer;
