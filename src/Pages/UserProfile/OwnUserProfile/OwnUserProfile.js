import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import Toolbar from '@mui/material/Toolbar';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import Header from '../../../Components/Shared/Header/Header';
import { useParams } from 'react-router-dom';

const OwnUserProfile = () => {
	const [dbUsers, setDbUsers] = useState([]);
	const [dbUserCollection, setDbUserCollection] = useState([]);
	let { userId } = useParams();


	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then(res => res.json())
			.then(data => setDbUsers(data));
	}, []);

	useEffect(() => {
		const findUser = dbUsers.find(dbUser => dbUser._id === userId);
		setDbUserCollection(findUser);
		console.log(findUser);
	}, [dbUsers]);

	return (
		<>
			<Header />
			<Toolbar sx={{ height: 80 }} />

			<Container sx={{ mb: 60 }}>

				<Box
					// key={dbUserCollection?._id}
				>
					<ProfileBanner
						user={dbUserCollection}
					/>
					<ProfileTabs
						user={dbUserCollection}
					/>
				</Box>

			</Container>
		</>
	);
};

export default OwnUserProfile;