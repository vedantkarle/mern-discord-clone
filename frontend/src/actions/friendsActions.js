import * as api from "../api";
import {
	SET_FRIENDS,
	SET_FRIENDS_FAILURE,
	SET_FRIENDS_REQUEST,
	SET_FRIENDS_SUCCESS,
	SET_ONLINE_USERS,
	SET_PENDING_INVITATIONS,
} from "../constants/friendsConstants";

export const sendInvitation =
	(data, closeDialog, setSuccess) => async dispatch => {
		dispatch({ type: SET_FRIENDS_REQUEST });

		const response = await api.sendInvitation(data);

		if (response.error) {
			dispatch({ type: SET_FRIENDS_FAILURE, payload: response.message });
			setTimeout(() => dispatch({ type: "RESET_FRIENDS_ERROR" }), 2000);
			closeDialog();
		} else {
			dispatch({ type: SET_FRIENDS_SUCCESS });
			setSuccess(true);
			setTimeout(() => setSuccess(false), 2000);
			closeDialog(closeDialog);
		}
	};

export const setPendingInvitations = pendingInvitations => dispatch => {
	dispatch({ type: SET_PENDING_INVITATIONS, payload: pendingInvitations });
};

export const acceptFriendInvitation = (data, setSuccess) => async dispatch => {
	const response = await api.acceptInvitation(data);
	if (response.error) {
		dispatch({ type: SET_FRIENDS_FAILURE, payload: response.message });
		setTimeout(() => dispatch({ type: "RESET_FRIENDS_ERROR" }), 2000);
	} else {
		dispatch({ type: SET_FRIENDS_SUCCESS });
		setSuccess("Invitation accepted");
		setTimeout(() => setSuccess(null), 2000);
	}
};

export const rejectFriendInvitation = (data, setSuccess) => async dispatch => {
	const response = await api.rejectInvitation(data);
	if (response.error) {
		dispatch({ type: SET_FRIENDS_FAILURE, payload: response.message });
		setTimeout(() => dispatch({ type: "RESET_FRIENDS_ERROR" }), 2000);
	} else {
		dispatch({ type: SET_FRIENDS_SUCCESS });
		setSuccess("Invitation rejected");
		setTimeout(() => setSuccess(null), 2000);
	}
};

export const setFriends = friends => dispatch => {
	dispatch({ type: SET_FRIENDS, payload: friends });
};

export const setOnlineUsers = users => dispatch => {
	dispatch({ type: SET_ONLINE_USERS, payload: users });
};
