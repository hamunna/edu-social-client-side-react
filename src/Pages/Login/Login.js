import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import loginBg from '../../images/login-bg.png'

const Login = () => {
	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1} sx={{ height: '650px' }}>


			{/* Left & Main Side */}
			<Box gridColumn="span 6" sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

				<Box sx={{ width: '60%' }}>
					<Typography variant="h3" sx={{ fontWeight: 900, color: "var(--tpdc)" }}>Login</Typography>

					<Typography variant="body1">To take a trivial example, which of us ever laborious physical exercise, except to obtain</Typography>

					<form>
						<TextField sx={{ display: 'block', my: 3 }} fullWidth type="email" label="Email" variant="standard" />

						<TextField sx={{ display: 'block', my: 3 }} fullWidth type="password" label="Password" variant="standard" />

						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<FormControlLabel
								value="remember"
								control={<Checkbox />}
								label="Remember"
								labelPlacement="remember"
							/>

							<Link>Reset Password</Link>
						</Box>

						<Button className="loginBtn" variant="contained">
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