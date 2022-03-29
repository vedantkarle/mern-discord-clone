import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import chatReducer from "./reducers/chatReducer";
import friendsReducer from "./reducers/friendsReducer";
import roomReducer from "./reducers/roomReducer";

const reducer = combineReducers({
	auth: authReducer,
	friends: friendsReducer,
	chat: chatReducer,
	room: roomReducer,
});

const userInfoFromStorage = localStorage.getItem("user")
	? JSON.parse(localStorage.getItem("user"))
	: null;

const initialState = {
	auth: { user: userInfoFromStorage, loading: false, error: null },
};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
