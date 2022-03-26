import { SET_CHAT_DETAILS, SET_MESSAGES } from "../constants/chatConstants";

const initState = {
	chosenChatDetails: null,
	chatType: null,
	messages: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case SET_CHAT_DETAILS:
			return {
				...state,
				chosenChatDetails: action.payload.chatDetails,
				chatType: action.payload.chatType,
			};
		case SET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
