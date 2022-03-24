import * as api from "../api";
import {
	SET_FRIENDS_FAILURE,
	SET_FRIENDS_REQUEST,
	SET_FRIENDS_SUCCESS,
} from "../constants/friendsConstants";

export const sendInvitation = (data, closeDialog) => async dispatch => {
	dispatch({ type: SET_FRIENDS_REQUEST });

	const response = await api.sendInvitation(data);

	if (response.error) {
		dispatch({ type: SET_FRIENDS_FAILURE, payload: response.message });
		setTimeout(() => dispatch({ type: "RESET_FRIENDS_ERROR" }), 2000);
	} else {
		dispatch({ type: SET_FRIENDS_SUCCESS });
		closeDialog(closeDialog);
	}
};
