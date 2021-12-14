import { Box, Container } from '@mui/material';
import React from 'react';
import RightSideBar from '../../../Components/Shared/SideBar/RightSideBar/RightSideBar';

const Home = () => {
	return (
		<>
			<Container>
				<Box sx={{ mt: 30 }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0}>


					{/* Left & Main Side */}
					<Box gridColumn="span 8" sx={{ p: 2 }}>

						<Box sx={{backgroundColor: '#fff', borderRadius: 2}}>
							<h1>Left & Main Side</h1>
						</Box>

					</Box>


					{/* Right Side */}
					<RightSideBar />

				</Box>
			</Container>

		</>
	);
};

export default Home;