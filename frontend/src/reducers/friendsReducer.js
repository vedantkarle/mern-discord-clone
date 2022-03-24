import {
	SET_FRIENDS,
	SET_FRIENDS_FAILURE,
	SET_FRIENDS_REQUEST,
	SET_FRIENDS_SUCCESS,
	SET_ONLINE_USERS,
	SET_PENDING_INVITATIONS,
} from "../constants/friendsConstants";

const initState = {
	friends: [],
	pendingInvitations: [],
	onlineUsers: [],
	loading: false,
	error: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRIENDS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case SET_PENDING_INVITATIONS:
			return {
				...state,
				pendingInvitations: action.payload,
				loading: false,
				error: null,
			};
		case SET_FRIENDS:
			return {
				...state,
				friends: action.payload,
				loading: false,
				error: null,
			};
		case SET_ONLINE_USERS:
			return {
				...state,
				onlineUsers: action.payload,
				loading: false,
				error: null,
			};
		case SET_FRIENDS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case SET_FRIENDS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			};
		case "RESET_FRIENDS_ERROR":
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export default reducer;
