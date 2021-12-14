import { Box } from '@mui/material';
import React from 'react';
import FriendsWidget from '../FriendsWidget/FriendsWidget';
import GroupsWidget from '../GroupsWidget/GroupsWidget';
import RecentBlogsWidget from '../RecentBlogsWidget/RecentBlogsWidget';

const RightSideBar = () => {
	return (

		<Box gridColumn="span 4" sx={{ p: 2 }}>

			<FriendsWidget />
			
			<GroupsWidget />

			<RecentBlogsWidget />

		</Box>

	);
};

export default RightSideBar;