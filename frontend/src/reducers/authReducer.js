import {
	USER_AUTH_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
} from "../constants/authConstants";

const initState = {
	user: null,
	loading: false,
	error: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case USER_AUTH_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER_AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				user: action.payload,
			};
		case USER_AUTH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case "RESET_ERROR":
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export default reducer;
