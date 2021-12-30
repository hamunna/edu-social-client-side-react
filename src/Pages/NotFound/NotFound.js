import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '656px', background: '#ccc' }}>
			<h1 style={{ fontSize: "10vw", margin: "0" }}>404</h1>
			<h1>Page Not Found!</h1>

			<Button as={Link} to="/" className="loginBtn" variant="contained" sx={{width: '20vw', textAlign: 'center', textDecoration: 'none'}}>
				Back to Home
			</Button>
		</div>
	);
};

export default NotFound;