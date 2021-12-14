import { Box, Container } from '@mui/material';
import React from 'react';
import FeedTextOneImgPost from '../../../Components/FeedPosts/FeedTextOneImgPost/FeedTextOneImgPost';
import FeedTextOnlyPost from '../../../Components/FeedPosts/FeedTextOnlyPost/FeedTextOnlyPost';
import PostBox from '../../../Components/Shared/PostBlock/PostBox/PostBox';
import RightSideBar from '../../../Components/Shared/SideBar/RightSideBar/RightSideBar';

const Home = () => {
	return (
		<>
			<Container>
				<Box sx={{ mt: 30 }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1}>


					{/* Left & Main Side */}
					<Box gridColumn="span 8" sx={{ p: 2 }}>

						<PostBox />

						<FeedTextOnlyPost />

						<FeedTextOneImgPost />

					</Box>

					{/* Right Side */}
					<Box gridColumn="span 4" sx={{ p: 2 }}>
						<RightSideBar />
					</Box>

				</Box>
			</Container>

		</>
	);
};

export default Home;