import { SET_CHAT_DETAILS, SET_MESSAGES } from "../constants/chatConstants";

export const setChosenChatDetails = data => dispatch => {
	dispatch({ type: SET_CHAT_DETAILS, payload: data });
};

export const setMessages = data => dispatch => {
	dispatch({ type: SET_MESSAGES, payload: data });
};
