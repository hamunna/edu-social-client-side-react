import React from 'react';
import { Container } from '@mui/material';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import Toolbar from '@mui/material/Toolbar';

const ProfilePage = () => {
	return (
		<>
			<Toolbar sx={{ height: 80 }} />

			<Container>
				<ProfileBanner />
			</Container>
		</>
	);
};

export default ProfilePage;