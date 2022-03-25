import axios from "axios";
import { logout } from "../utils/auth";

const AUTH_API = axios.create({
	baseURL: "http://localhost:5000/api/auth",
	timeout: 60000,
});

const FRIENDS_API = axios.create({
	baseURL: "http://localhost:5000/api/friends",
	timeout: 60000,
});

FRIENDS_API.interceptors.request.use(
	config => {
		const user = JSON.parse(localStorage.getItem("user"));

		if (user) {
			const token = user?.token;
			config.headers.Authorization = token;
		}

		return config;
	},
	err => {
		return Promise.reject(err);
	},
);

export const login = async data => {
	try {
		return await AUTH_API.post("/login", data);
	} catch (error) {
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

export const register = async data => {
	try {
		return await AUTH_API.post("/register", data);
	} catch (error) {
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

export const sendInvitation = async data => {
	try {
		return await FRIENDS_API.post("/invite", data);
	} catch (error) {
		checkResponse(error);
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

export const acceptInvitation = async data => {
	try {
		return await FRIENDS_API.post("/invitation/accept", data);
	} catch (error) {
		checkResponse(error);
		return {
			error: true,
			message: error?.response?.data || error?.message,
		};
	}
};

export const rejectInvitation = async data => {
	try {
		return await FRIENDS_API.post("/invitation/reject", data);
	} catch (error) {
		checkResponse(error);
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
