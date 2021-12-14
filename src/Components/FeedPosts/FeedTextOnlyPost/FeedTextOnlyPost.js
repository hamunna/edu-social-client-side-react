import { Box, Typography } from '@mui/material';
import React from 'react';
import FeedPostFooter from '../FeedPostFooter/FeedPostFooter';
import FeedPostHeader from '../FeedPostHeader/FeedPostHeader';

const FeedTextOnlyPost = () => {
	return (
		<Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 4, mb: 4 }}>
			<FeedPostHeader />

			<Typography variant="body2" sx={{d: 'block', mb: 2}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </Typography>
			
			<Typography variant="body2" sx={{ d: 'block', mb: 2 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </Typography>

			<FeedPostFooter />
		</Box>
	);
};

export default FeedTextOnlyPost;