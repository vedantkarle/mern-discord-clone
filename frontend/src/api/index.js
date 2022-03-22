import axios from "axios";
import { logout } from "../utils/auth";

const API = axios.create({
	baseURL: "http://localhost:5000/api",
	timeout: 60000,
});

export const login = async data => {
	try {
		return await API.post("/auth/login", data);
	} catch (error) {
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

export const register = async data => {
	try {
		return await API.post("/auth/register", data);
	} catch (error) {
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

const checkResponse = error => {
	const statusCode = error?.response?.statusCode;
	(statusCode === 401 || statusCode === 403) && logout();
};
