import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1} sx={{ height: '650px' }}>


			{/* Left & Main Side */}
			<Box gridColumn="span 6" sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

				<Box sx={{ width: '60%' }}>
					<Typography variant="h3" sx={{ fontWeight: 900, color: "#5854EF" }}>Login</Typography>

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
					
						<Button className="registerSwitchBtn">
							Register
						</Button>
				</Box>



			</Box>

			{/* Right Side */}
			<Box gridColumn="span 6" sx={{ p: 2 }}>
				<img style={{ height: '650px', width: '100%' }} src="https://image.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg" alt="" />
			</Box>

		</Box>
	);
};

export default Login;