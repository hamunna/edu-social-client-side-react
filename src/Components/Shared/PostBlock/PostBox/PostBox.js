import React from 'react';
import PostBoxNavigator from '../PostBoxNavigator/PostBoxNavigator';
import { Box } from '@mui/material';

const PostBox = () => {
	return (
		<Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 0, mb: 4 }}>
			
			<PostBoxNavigator />

		</Box>

	);
};

export default PostBox;