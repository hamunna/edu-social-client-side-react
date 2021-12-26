import { Box, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../../../hooks/useAuth';

const initializeStatusData = {
	statusPosterId: "",
	statusPosterEmail: "",
	statusText: "",
	statusImages: [],
	statusCollections: {
		loves: [],
		comments: []
	}
}

const StatusEditor = () => {
	const { user } = useAuth();
	const [statusData, setStatusData] = useState(initializeStatusData);

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newStatus = { ...statusData, statusPosterEmail: user?.email };
		newStatus[field] = value;

		console.log(newStatus)
		setStatusData(newStatus);
	}

	const handleOnSubmit = e => {
		e.preventDefault();
		sendStatus(statusData)

		console.log(statusData);
		e.target.reset();
	}


	const sendStatus = (statusData) => {
		fetch('http://localhost:5000/statuses', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(statusData)
		})
	}

	return (
		<Box sx={{ pb: 3 }}>
			<form onSubmit={handleOnSubmit} style={{ maxWidth: '100%', p: 3 }}>
				<TextField
					fullWidth
					name="statusText"
					placeholder="Share what are you thinking now..."
					multiline
					rows={8}
					variant="standard"
					sx={{ border: 'none', outline: 'none', p: 3, boxSizing: 'border-box' }}
					onBlur={handleOnBlur}
				/>
				<Button
					sx={{ display: 'block', ml: 'auto', mr: 3 }}
					variant="contained"
					className="theme-primary-btn"
					type="submit"
				>Post Submit</Button>
			</form>
		</Box>
	);
};

export default StatusEditor;