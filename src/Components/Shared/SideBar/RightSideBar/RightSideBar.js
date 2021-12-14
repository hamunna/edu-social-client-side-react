import { Box } from '@mui/material';
import React from 'react';
import FriendsWidget from '../FriendsWidget/FriendsWidget';
import GroupsWidget from '../GroupsWidget/GroupsWidget';
import RecentBlogsWidget from '../RecentBlogsWidget/RecentBlogsWidget';

const RightSideBar = () => {
	return (

		<>

			<FriendsWidget />
			
			<GroupsWidget />

			<RecentBlogsWidget />

		</>

	);
};

export default RightSideBar;