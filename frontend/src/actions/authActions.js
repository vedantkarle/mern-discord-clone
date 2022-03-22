import * as api from "../api";
import {
	USER_AUTH_FAILURE,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
} from "../constants/authConstants";

export const userLogin = (userDetails, navigate) => async dispatch => {
	dispatch({ type: USER_AUTH_REQUEST });

	const response = await api.login(userDetails);

	if (response.error) {
		dispatch({ type: USER_AUTH_FAILURE, payload: response.message });
		setTimeout(() => dispatch({ type: "RESET_ERROR" }), 2000);
	} else {
		const { user } = response?.data;
		localStorage.setItem("user", JSON.stringify(user));

		dispatch({ type: USER_AUTH_SUCCESS, payload: user });
		navigate("/dashboard");
	}
};

export const userRegister = (userDetails, navigate) => async dispatch => {
	dispatch({ type: USER_AUTH_REQUEST });

	const response = await api.register(userDetails);

	if (response.error) {
		dispatch({ type: USER_AUTH_FAILURE, payload: response.message });
		setTimeout(() => dispatch({ type: "RESET_ERROR" }), 2000);
	} else {
		const { user } = response?.data;
		localStorage.setItem("user", JSON.stringify(user));

		dispatch({ type: USER_AUTH_SUCCESS, payload: user });
		navigate("/dashboard");
	}
};
