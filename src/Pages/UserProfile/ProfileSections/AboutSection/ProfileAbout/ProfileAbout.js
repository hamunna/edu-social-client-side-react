import React from 'react';
import ProfileBasicInfoCard from '../ProfileBasicInfoCard/ProfileBasicInfoCard';
import ProfileContactInfoCard from '../ProfileContactInfoCard/ProfileContactInfoCard';
import ProfileHobbiesInterestsCard from '../ProfileHobbiesInterestsCard/ProfileHobbiesInterestsCard';

const ProfileAbout = ({ user }) => {
	return (
		<>
			<ProfileBasicInfoCard user={user} />

			<ProfileHobbiesInterestsCard user={user} />

			<ProfileContactInfoCard user={user} />
		</>
	);
};

export default ProfileAbout;