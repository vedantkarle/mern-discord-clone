import { Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../actions/authActions";
import AuthBox from "../components/AuthBox";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Input from "../components/Input";
import { validateRegisterForm } from "../utils/validators";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { loading, error: authError, user } = useSelector(state => state.auth);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const handleRegister = e => {
		e.preventDefault();
		const err = validateRegisterForm({ email, username, password });

		if (!email || !username || !password) {
			setError("All fields must be provided");
			handleClick();
			return;
		}

		if (err !== null) {
			setError(err);
			handleClick();
			return;
		}

		dispatch(userRegister({ email, username, password }, navigate));
	};

	return (
		<AuthBox height={450}>
			<Header title='Create an account' />

			<Input label='EMAIL' value={email} setValue={setEmail} type='text' />
			<Input
				label='USERNAME'
				value={username}
				setValue={setUsername}
				type='text'
			/>
			<Input
				label='PASSWORD'
				value={password}
				setValue={setPassword}
				type='password'
			/>
			<Btn label='Register' onClick={handleRegister} />
			<Typography variant='p' sx={{ marginTop: "5px" }}>
				<Link to='/login'>Already have an account?</Link>
			</Typography>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
					{error}
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={authError !== null}
				autoHideDuration={2000}
				onClose={handleClose}>
				<Alert severity='error' sx={{ width: "100%" }}>
					{authError}
				</Alert>
			</Snackbar>
		</AuthBox>
	);
};

export default Register;
