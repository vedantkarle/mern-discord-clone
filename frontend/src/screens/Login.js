import { Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../actions/authActions";
import AuthBox from "../components/AuthBox";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Input from "../components/Input";
import { validateLoginForm } from "../utils/validators";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Login = () => {
	const [email, setEmail] = useState("");
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

	const handleLogin = e => {
		e.preventDefault();
		const err = validateLoginForm({ email, password });

		if (!email || !password) {
			setError("Email and password must be provided");
			handleClick();
			return;
		}

		if (err !== null) {
			setError(err);
			handleClick();
			return;
		}

		dispatch(userLogin({ email, password }, navigate));
	};

	return (
		<AuthBox height={400}>
			<Header title='Welcome back!' />
			<Typography
				variant='p'
				sx={{ color: "gray", textAlign: "center", marginTop: "5px" }}>
				We're so excited to see you again!
			</Typography>
			<form>
				<Input label='EMAIL' value={email} setValue={setEmail} type='text' />
				<Input
					label='PASSWORD'
					value={password}
					setValue={setPassword}
					type='password'
				/>
				<Btn
					tye='submit'
					label='Login'
					onClick={handleLogin}
					loading={loading}
				/>
			</form>
			<Typography variant='p' sx={{ color: "gray", marginTop: "5px" }}>
				Need an account?<Link to='/register'>Register</Link>
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

export default Login;
