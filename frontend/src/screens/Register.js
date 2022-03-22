import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthBox from "../components/AuthBox";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Input from "../components/Input";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

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
			<Btn label='Register' />
			<Typography variant='p' sx={{ marginTop: "5px" }}>
				<Link to='/login'>Already have an account?</Link>
			</Typography>
		</AuthBox>
	);
};

export default Register;
