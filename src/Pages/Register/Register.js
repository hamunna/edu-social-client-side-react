import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import regiBg from '../../images/login-bg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
	const [gender, setGender] = React.useState('');
	const { user, registerUser } = useFirebase();
	const [loginData, setLoginData] = useState([]);

	const navigate = useNavigate();

	// Handle Inputs with onBlur method

	// Note:: Some input uses onChange to avoid Browser AutoFill
	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		console.log(newLoginData);
		setLoginData(newLoginData);
	}

	const handleRegisterUserSubmit = e => {
		e.preventDefault();
		registerUser(loginData.email, loginData.password, loginData.firstName + ' ' + loginData.lastName, navigate("/"));
		alert("Registered Successfully!");

		e.target.reset();
	}

	// Handling Gender
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
					<Typography variant="h3" sx={{ fontWeight: 900, color: "var(--tpdc)", mb: 1 }}>Register</Typography>

					<Typography variant="body2">EduSocial is a campus based educational social networking site where you can connect with your friends</Typography>

					<form onSubmit={handleRegisterUserSubmit}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="First Name"
								name="firstName"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Last Name"
								name="lastName"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }} >

							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Date of Birth"
								placeholder="dd/mm/yyyy"
								name="birthDate"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							<FormControl
								variant="standard"
								sx={{ width: '49%' }}
							>
								<InputLabel id="gender">Gender</InputLabel>
								<Select
									labelId="gender"
									name="gender"
									value={gender}
									onChange={handleChange}
									label="Gender"
									sx={{ textAlign: 'left' }}
									onBlur={handleOnBlur}
									required
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
								name="email"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="text"
								label="Phone"
								name="phone"
								variant="standard"
								onChange={handleOnBlur}
							/>
						</Box>



						<Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Password"
								name="password"
								variant="standard"
								onBlur={handleOnBlur}
								required
							/>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Confirm Password"
								name="confirmPassword"
								variant="standard"
							/>

						</Box>

						<Button type="submit" className="loginBtn" variant="contained">
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