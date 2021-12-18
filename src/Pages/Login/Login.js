import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import loginBg from '../../images/login-bg.png';



const Login = () => {
	const { user, loginUser } = useAuth();
	const [loginData, setLoginData] = useState([]);
	const navigate = useNavigate();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;


		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		console.log(newLoginData);
		setLoginData(newLoginData);
	}

	const handleLoginUserSubmit = e => {

		e.preventDefault();
		alert("Login Successfully!");
		loginUser(loginData.email, loginData.password, navigate("/"));

		e.target.reset();
	}


	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1} sx={{ height: '650px' }}>


			{/* Left & Main Side */}
			<Box gridColumn="span 6" sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

				<Box sx={{ width: '60%' }}>
					<Typography variant="h3" sx={{ fontWeight: 900, color: "var(--tpdc)", mb: 1 }}>Login</Typography>

					<Typography variant="body2">EduSocial is a campus based educational social networking site where you can connect with your friends</Typography>

					<form onSubmit={handleLoginUserSubmit}>
						<TextField
							sx={{ display: 'block', my: 3 }}
							fullWidth
							type="email"
							label="Email"
							name="email"
							variant="standard"
							onBlur={handleOnBlur}
						/>

						<TextField
							sx={{ display: 'block', my: 3 }}
							fullWidth
							type="password"
							label="Password"
							name="password"
							variant="standard"
							onBlur={handleOnBlur}
						/>

						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<FormControlLabel
								value="remember"
								control={<Checkbox />}
								label="Remember"
								labelPlacement="remember"
							/>

							<Button>Reset Password</Button>
						</Box>

						<Button type="submit" className="loginBtn" variant="contained">
							Login your account
						</Button>
					</form>

					<Typography variant="body2">----------------------- New User ? -----------------------</Typography>

					<NavLink style={{ textDecoration: 'none' }} to="/register">

						<Button className="registerSwitchBtn">
							Register
						</Button>
					</NavLink>
				</Box>



			</Box>

			{/* Right Side */}
			<Box gridColumn="span 6" sx={{ display: 'flex', alignItems: 'center' }}>
				<img style={{ width: '90%' }} src={loginBg} alt="" />
			</Box>

		</Box>
	);
};

export default Login;