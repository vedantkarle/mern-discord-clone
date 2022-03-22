export const validateLoginForm = ({ email, password }) => {
	const isMailValid = validateMail(email);
	const isPasswordValid = validatePassword(password);

	return !isMailValid
		? "Enter a valid email!"
		: !isPasswordValid
		? "Password must be at least 6 characters"
		: null;
};

const validatePassword = password => {
	return password.length > 6;
};

const validateMail = email => {
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return regex.test(email);
};
