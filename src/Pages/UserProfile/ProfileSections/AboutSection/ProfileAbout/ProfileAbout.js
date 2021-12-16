import React from 'react';
import ProfileBasicInfoCard from '../ProfileBasicInfoCard/ProfileBasicInfoCard';
import ProfileHobbiesInterestsCard from '../ProfileHobbiesInterestsCard/ProfileHobbiesInterestsCard';

const ProfileAbout = () => {
	return (
		<>
			<ProfileBasicInfoCard />

			<ProfileHobbiesInterestsCard />
		</>
	);
};

export default ProfileAbout;