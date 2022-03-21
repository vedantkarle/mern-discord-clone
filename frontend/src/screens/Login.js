import { Typography } from "@mui/material";
import React, { useState } from "react";
import AuthBox from "../components/AuthBox";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Input from "../components/Input";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthBox>
			<Header title='Welcome back!' />
			<Typography
				variant='p'
				sx={{ color: "gray", textAlign: "center", marginTop: "5px" }}>
				We're so excited to see you again!
			</Typography>
			<Input label='EMAIL' value={email} setValue={setEmail} type='email' />
			<Input
				label='PASSWORD'
				value={password}
				setValue={setPassword}
				type='password'
			/>
			<Btn label='Login' disabled={!email || !password} />
		</AuthBox>
	);
};

export default Login;
