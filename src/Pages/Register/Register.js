import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import regiBg from '../../images/login-bg.png';
import { NavLink } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Register = () => {
	const [value, setValue] = React.useState(null);
	const [gender, setGender] = React.useState('');

	const handleChange = (event) => {
		setGender(event.target.value);
	};

	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1} sx={{ height: '650px' }}>

			{/* Left Side */}
			<Box gridColumn="span 6" sx={{ display: 'flex', alignItems: 'center' }}>
				<img style={{ width: '90%' }} src={regiBg} alt="" />
			</Box>

			{/* Right & Main Side */}
			<Box gridColumn="span 6" sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

				<Box sx={{ width: '70%' }}>
					<Typography variant="h3" sx={{ fontWeight: 900, color: "var(--tpdc)" }}>Register</Typography>

					<Typography variant="body1">To take a trivial example, which of us ever laborious physical exercise, except to obtain</Typography>

					<form>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="First Name"
								name="firstName"
								variant="standard"
							/>

							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Last Name"
								name="lastName"
								variant="standard"
							/>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }} >

							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Date of Birth"
								placeholder="dd/mm/yyyy"
								name="lastName"
								variant="standard"
							/>

							<FormControl
								variant="standard"
								sx={{ width: '49%' }}
							>
								<InputLabel id="gender">Gender</InputLabel>
								<Select
									labelId="gender"
									id="demo-simple-select-standard"
									value={gender}
									onChange={handleChange}
									label="Gender"
								>

									<MenuItem value="male">Male</MenuItem>
									<MenuItem value="female">Female</MenuItem>
									<MenuItem value="other">Other</MenuItem>
								</Select>
							</FormControl>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>

							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="email"
								label="Email"
								variant="standard"
							/>

							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="text"
								label="Phone"
								variant="standard"
							/>
						</Box>



						<Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Password"
								name="password"
								variant="standard"
							/>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Confirm Password"
								name="confirmPassword"
								variant="standard"
							/>

						</Box>

						<Button className="loginBtn" variant="contained">
							Register New Account
						</Button>
					</form>

					<Typography variant="body2">----------------------- Already User ? -----------------------</Typography>

					<NavLink style={{ textDecoration: 'none' }} to="/login">
						<Button className="registerSwitchBtn">
							Login
						</Button>
					</NavLink>
				</Box>


			</Box>



		</Box>
	);
};

export default Register;