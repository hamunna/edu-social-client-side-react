import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import Toolbar from '@mui/material/Toolbar';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import Header from '../../../Components/Shared/Header/Header';

const ProfilePage = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then(res => res.json())
			.then(data => setUsers(data));
	}, []);

	return (
		<>
			<Header />
			<Toolbar sx={{ height: 80 }} />

			<h1>This is Normal User Profile Page</h1>

			<Container sx={{ mb: 60 }}>
				{
					users.map(user => <Box
						key={user.userId}
					>
						<ProfileBanner
							user={user}
						/>
						<ProfileTabs
							user={user}
						/>
					</Box>

					)
				}


			</Container>
		</>
	);
};

export default ProfilePage;