import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeFriend = ({ userRequestedTo }) => {
	const { user } = useAuth();
	const [usersCollection, setUsersCollection] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);

	// console.log(userRequestedTo);
	// console.log(userRequestedTo?.email); // got user
	// console.log(user.email); // got user

	useEffect(() => {
		fetch('https://warm-basin-63118.herokuapp.com/users')
			.then(res => res.json())
			.then(data => setUsersCollection(data));
	}, []);


	// Sending Data to the Database
	const findSenderEmailInReceiver = userRequestedTo?.activityData?.pendingFriendRequests?.includes(user?.email);
	const handlePendingFrReq = () => {
		if (!findSenderEmailInReceiver) {
			userRequestedTo?.activityData?.pendingFriendRequests?.push(user?.email);
		}

		fetch('https://warm-basin-63118.herokuapp.com/users/frReqTo', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(userRequestedTo)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
			});

		// alert("Request send successfully!");
	}

	// Updating FrReqSender data on the Database
	useEffect(() => {
		const findCurrentUser = usersCollection.find(currentUser => currentUser?.email === user?.email);
		setCurrentUser(findCurrentUser);
		// console.log(findCurrentUser);
	},[user?.email])
	// console.log(currentUser);		
	
	const findReceiverEmailInSender = currentUser?.activityData?.sentFriendRequests?.includes(userRequestedTo?.email);
	console.log(currentUser)
	console.log(findReceiverEmailInSender);

	const handleSentFrReq = () => {
		if (!findReceiverEmailInSender) {
			currentUser?.activityData?.sentFriendRequests?.push(userRequestedTo?.email);
		}

		fetch('https://warm-basin-63118.herokuapp.com/users/frReqFrom', {
		// fetch('http://localhost:5000/users/frReqFrom', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(currentUser)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
			});
		
	}

	// Handle Submit Friend Request
	const handleSubmitFriendRequest = () => {
		handlePendingFrReq();

		handleSentFrReq();
		alert("Request send successfully!");
	}


	return (
		<Button className="theme-fr-btn" sx={{ px: '3vw' }} onClick={handleSubmitFriendRequest}>Make Friend</Button>
	);
};

export default MakeFriend;