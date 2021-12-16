import React from 'react';
import { Container } from '@mui/material';
import ProfileBanner from '../ProfileBanner/ProfileBanner';
import Toolbar from '@mui/material/Toolbar';
import ProfileTabs from '../ProfileTabs/ProfileTabs';

const ProfilePage = () => {
	return (
		<>
			<Toolbar sx={{ height: 80 }} />

			<Container sx={{mb: 60}}>
				<ProfileBanner />

				<ProfileTabs />
			</Container>
		</>
	);
};

export default ProfilePage;