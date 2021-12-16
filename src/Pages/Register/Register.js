import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

import regiBg from '../../images/login-bg.png';
import { Link } from 'react-router-dom';

const Register = () => {
	const [value, setValue] = React.useState(new Date());

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

						<LocalizationProvider
							dateAdapter={AdapterDateFns}
						>
							<Stack spacing={3}>
								<DatePicker
									views={['year']}
									label="Year only"
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => <TextField {...params} helperText={null} />}
								/>
								<DatePicker
									views={['year', 'month']}
									label="Year and Month"
									minDate={new Date('2012-03-01')}
									maxDate={new Date('2023-06-01')}
									value={value}
									onChange={(newValue) => {
										setValue(newValue);
									}}
									renderInput={(params) => <TextField {...params} helperText={null} />}
								/>
							</Stack>
						</LocalizationProvider>

						<TextField
							sx={{ display: 'block', my: 1 }}
							fullWidth
							type="email"
							label="Email"
							variant="standard"
						/>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>

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

					<Link as={Button} to="login" className="registerSwitchBtn">
						Login
					</Link>
				</Box>


			</Box>



		</Box>
	);
};

export default Register;