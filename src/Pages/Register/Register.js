import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import regiBg from '../../images/login-bg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const initialDbUserData = {
	email: "",
	password: "",
	photoURL: "",
	bannerImageURL: "",
	basicInfo: {
		firstName: "",
		lastName: "",
		birthDate: "",
		gender: ""
	},
	contactInfo: {
		phone: "",
		website: "",
		socialSites: [
			{
				socialSiteName: "",
				link: ""
			}
		],
		address: {
			street: "",
			city: "",
			country: "Bangladesh"
		}
	},
	workExperience: [
		{
			companyName: "",
			jobTitle: "",
			startDate: "",
			endData: ""
		}
	],
	hobbiesInterests: {
		sports: [],
		books: [],
		programmingTechnologies: [],
		hobbies: []
	},
	activityData: {
		friends: [],
		pendingFriendRequests: [],
		following: [],
		followers: [],
		groups: [],
		purchaseHistory: [
			{
				productId: "",
				productName: "",
				purchasePrice: "",
				purchaseDate: ""
			}
		]
	}
}

const Register = () => {
	const [gender, setGender] = React.useState('');
	const [city, setCity] = React.useState('');
	const { user, registerUser } = useAuth();
	const [registerData, setRegisterData] = useState(initialDbUserData);

	console.log(registerData);

	const navigate = useNavigate();

	// Handle Inputs with onBlur method
	// Note:: Some input used onChange to avoid Browser AutoFill
	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newRegisterData = { ...registerData };

		if (field === "firstName" || field === "lastName" || field === "birthDate" || field === "gender") {
			newRegisterData.basicInfo[field] = value;
			// newRegisterData[field] = '';
		}

		if (field === 'city') {
			newRegisterData.contactInfo.address[field] = value;
			
		}

		if (field === "email" || field === "photoURL" || field === "bannerImageURL" || field === "password") {
			
			newRegisterData[field] = value;
		}


		console.log(newRegisterData);
		setRegisterData(newRegisterData);
	}

	const handleRegisterUserSubmit = e => {
		e.preventDefault();

		registerUser(registerData, navigate)

		alert("Registered Successfully!");

		console.log("After Register: " + registerData);
		console.log("After Register: " + typeof registerData);

		e.target.reset();
	}

	// Handling Gender
	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	// Handling City
	const handleCityChange = (event) => {
		setCity(event.target.value);
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

						{/* Name Fields */}
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

						{/* DOB & Gender */}
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
									onChange={handleGenderChange}
									label="Gender"
									sx={{ textAlign: 'left' }}
									onBlur={handleOnBlur}
									required
								>

									<MenuItem value="Male">Male</MenuItem>
									<MenuItem value="Female">Female</MenuItem>
									<MenuItem value="Other">Other</MenuItem>
								</Select>
							</FormControl>
						</Box>

						{/* Web & Image */}
						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>

							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="url"
								label="Photo-URL"
								name="photoURL"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="url"
								label="Banner Img-URL"
								name="bannerImageURL"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>
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

							{/* City Select */}
							<FormControl
								variant="standard"
								sx={{ width: '49%' }}
							>
								<InputLabel id="city">Your City</InputLabel>
								<Select
									labelId="city"
									name="city"
									value={city}
									onChange={handleCityChange}
									label="City"
									sx={{ textAlign: 'left' }}
									onBlur={handleOnBlur}
									required
								>

									<MenuItem value="Dhaka">Dhaka</MenuItem>
									<MenuItem value="Chattagram">Chattagram</MenuItem>
									<MenuItem value="Sylhet">Sylhet</MenuItem>
									<MenuItem value="Rajshahi">Rajshahi</MenuItem>
									<MenuItem value="Khulna">Khulna</MenuItem>
									<MenuItem value="Borishal">Borishal</MenuItem>
									<MenuItem value="Rongpur">Rongpur</MenuItem>
									<MenuItem value="Mymensingh">Mymensingh</MenuItem>
								</Select>
							</FormControl>
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