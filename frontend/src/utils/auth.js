export const logout = () => {
	localStorage.removeItem("user");
	window.location.pathname = "/login";
};
