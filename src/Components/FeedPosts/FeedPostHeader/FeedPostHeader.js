import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

const FeedPostHeader = () => {
	return (
		<ListItem sx={{p: 0, m: 0, pb: 2}}>
			<ListItemAvatar sx={{ mr: 2 }}>
				<Avatar
					alt=""
					src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
					sx={{ width: 40, height: 40 }}
				/>
			</ListItemAvatar>
			<ListItemText primary="Mark Zuckerberg" secondary="Jan 9, 2022" />
		</ListItem>
	);
};

export default FeedPostHeader;