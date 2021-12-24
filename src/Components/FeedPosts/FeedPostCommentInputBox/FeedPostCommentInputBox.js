import { Button, DialogContent, IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import PropTypes from 'prop-types';
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


const FeedPostCommentInputBox = ({ status, handleExpandClick }) => {
	const { user } = useAuth();
	const [comment, setComment] = useState(status);

	// Modal Action
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		handleExpandClick()
		setOpen(false);
	};

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newComment = { ...comment }
		const updatedComment = { userEmail: user.email, statusCommentText: value }

		if (field === "statusCommentText") {
			comment.statusCollections.comments.push(updatedComment)
		}

		setComment(newComment);

		// console.log(newComment);

	}

	const handleCommentSubmit = e => {
		e.preventDefault();

		const statusUpdate = comment;

		// console.log(statusUpdate);

		fetch('http://localhost:5000/statuses/comment', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(statusUpdate)
		})
			.then(res => res.json())
			.then(data => {
				// setEmail('');
				// setSuccess(true);
				// console.log(data);
			});

		e.target.reset();
		handleClickOpen();
	}


	return (
		<div>
			<form onSubmit={handleCommentSubmit} style={{ display: 'flex' }} autoComplete='off'>
				<Box
					sx={{
						width: '100%',
						borderRadius: 0,
					}}
				>
					<TextField
						type="text"
						name="statusCommentText"
						fullWidth
						label="Write your comment here..."
						onBlur={handleOnBlur}
					/>
				</Box>

				<Button type="submit" variant="contained" className="theme-primary-btn">Comment</Button>
			</form>

			<BootstrapDialog
				onClose={handleClose}
				open={open}
			>

				<DialogContent dividers>

					Your Comment is Added Successfully!
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

export default FeedPostCommentInputBox;