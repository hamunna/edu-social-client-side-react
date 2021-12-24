import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const FeedPostLoveCalculate = ({ status, dbUsers }) => {
	const { loves, comments } = status.statusCollections;
	// const [loveReactor, setLoveReactor] = useState('');
	const { user } = useAuth();

	console.log(user);


	const handleAddLoveReact = () => {

		const findUserEmail = loves.find(userEmail => userEmail === user?.email);

		if (!findUserEmail) {

			loves.push(user?.email);
		}

		if (findUserEmail) {
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

		alert("Loved This Post!");
	}

	return (

		<IconButton aria-label="Loves">
			<Badge badgeContent={loves?.length} color="secondary">

				<FavoriteIcon onClick={handleAddLoveReact} />
				{/* <FavoriteIcon onClick={handleAddLoveReact} sx={{ color: 'crimson' }} /> */}

			</Badge>
		</IconButton>

	);
};

export default FeedPostLoveCalculate;