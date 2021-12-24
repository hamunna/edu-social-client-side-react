import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

// const initialStatus = {
// 	statusCollections: {
// 		comments: []
// 	}
// }

const FeedPostCommentInputBox = ({ status }) => {
	const { user } = useAuth();
	const [comment, setComment] = useState(status)

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

		alert("Comment added successfully!");
		// console.log(comment._id)
		e.target.reset();
	}


	return (
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
	);
};

export default FeedPostCommentInputBox;