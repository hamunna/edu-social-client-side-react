import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeFriend = ({ userRequestedTo }) => {
	const { user } = useAuth();
	const [usersCollection, setUsersCollection] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);

	console.log(userRequestedTo);
	console.log(userRequestedTo?.email); // got user
	console.log(user.email); // got user

	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then(res => res.json())
			.then(data => setUsersCollection(data));
	}, []);

	// Sending Data to the Database
	const findSenderEmailInReceiver = userRequestedTo?.activityData?.pendingFriendRequests?.includes(user?.email);

	console.log(findSenderEmailInReceiver);

	const handleFrReqToSubmit = () => {
		if (!findSenderEmailInReceiver) {
			userRequestedTo?.activityData?.pendingFriendRequests?.push(user?.email);
		}

		fetch('http://localhost:5000/users/frReqTo', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(userRequestedTo)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});

		alert("Request send successfully!");
	}



	return (
		<Button className="theme-primary-btn" sx={{ px: '3vw' }} onClick={handleFrReqToSubmit}>Make Friend</Button>
	);
};

export default MakeFriend;