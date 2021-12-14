import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const StatusEditor = () => {
	return (
		<Box sx={{pb: 3}}>
			<form style={{ maxWidth: '100%', p: 3 }}>
				<TextField
					fullWidth
					placeholder="Share what are you thinking now..."
					multiline
					rows={8}
					variant="standard"
					sx={{ border: 'none', outline: 'none', p: 3, boxSizing: 'border-box'}}
				/>
				<Button sx={{ display: 'block', mx: 'auto' }} variant="contained" className="theme-primary-drk-bg">Post Submit</Button>
			</form>
		</Box>
	);
};

export default StatusEditor;