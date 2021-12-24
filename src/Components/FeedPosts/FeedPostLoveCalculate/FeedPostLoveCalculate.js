import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, DialogContent, IconButton, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};


const FeedPostLoveCalculate = ({ status }) => {
	const { loves } = status.statusCollections;
	const { user } = useAuth();

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	// Send Love to Database & Handle Toggle Love React
	const findUserEmail = loves.find(userEmail => userEmail === user?.email);
	const handleToggleLoveReact = () => {

		if (!findUserEmail) {

			loves.push(user?.email);
		} else {
			const loverIndex = loves.indexOf(findUserEmail);
			loves.splice(loverIndex, 1);
		}

		console.log("Loves: ", loves)
		console.log("User Email: ", user?.email)

		fetch('http://localhost:5000/statuses/love', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(status)
		})
			.then(res => res.json())
			.then(data => {
				// setEmail('');
				// setSuccess(true);
				// console.log(data);
			});

		handleClickOpen();
	}

	return (

		<div>

			<IconButton aria-label="Loves">
				<Badge badgeContent={loves?.length} color="secondary">

					{
						!findUserEmail ? <FavoriteIcon onClick={handleToggleLoveReact} /> : <FavoriteIcon onClick={handleToggleLoveReact} sx={{ color: 'crimson' }} />
					}

				</Badge>
			</IconButton>

			<BootstrapDialog
				onClose={handleClose}
				open={open}
			>

				<DialogContent dividers>

					Your Action is Saved Successfully!
				</DialogContent>

				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Ok
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>



	);
};

export default FeedPostLoveCalculate;