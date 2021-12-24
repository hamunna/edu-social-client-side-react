import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const FeedPostLoveCalculate = ({ status }) => {
	const { loves } = status.statusCollections;
	const { user } = useAuth();

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

		// alert("Loved This Post!");
	}

	return (

		<IconButton aria-label="Loves">
			<Badge badgeContent={loves?.length} color="secondary">

				{
					!findUserEmail ? <FavoriteIcon onClick={handleToggleLoveReact} /> : <FavoriteIcon onClick={handleToggleLoveReact} sx={{ color: 'crimson' }} />
				}

			</Badge>
		</IconButton>

	);
};

export default FeedPostLoveCalculate;