import { SET_CHAT_DETAILS } from "../constants/chatConstants";

export const setChosenChatDetails = data => dispatch => {
	dispatch({ type: SET_CHAT_DETAILS, payload: data });
};
