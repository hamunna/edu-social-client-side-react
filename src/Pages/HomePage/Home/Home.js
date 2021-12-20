import { Box, Container } from '@mui/material';
import React from 'react';
import FeedStatusBoxes from '../../../Components/FeedPosts/FeedStatusBoxes/FeedStatusBoxes';
import Header from '../../../Components/Shared/Header/Header';
import PostBox from '../../../Components/Shared/PostBlock/PostBox/PostBox';
import RightSideBar from '../../../Components/Shared/SideBar/RightSideBar/RightSideBar';

const Home = ({ dbUsers }) => {
	return (
		<>
			<Header />
			<Container>
				<Box sx={{ mt: 30 }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1}>


					{/* Left & Main Side */}
					<Box gridColumn="span 8" sx={{ p: 2 }}>

						<PostBox />

						<FeedStatusBoxes dbUsers={dbUsers} />

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