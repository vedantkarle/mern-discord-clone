import { setMessages } from "../actions/chatActions";
import store from "../store";

export const updateDirectChatHistoryIfActive = data => {
	const { participants, messages } = data;

	const receiverId = store.getState().chat.chosenChatDetails?.id;
	const userId = store.getState().auth.user?._id;

	if (receiverId && userId) {
		const usersInConversation = [receiverId, userId];

		updateIfSameConversationActive({
			participants,
			messages,
			usersInConversation,
		});
	}
};

const updateIfSameConversationActive = ({
	participants,
	messages,
	usersInConversation,
}) => {
	const result = participants.every(participant => {
		return usersInConversation.includes(participant);
	});

	if (result) {
		store.dispatch(setMessages(messages));
	}
};
