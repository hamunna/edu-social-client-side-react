import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import RightSideBar from '../../../Components/Shared/SideBar/RightSideBar/RightSideBar';
import ProfileAbout from '../ProfileSections/AboutSection/ProfileAbout/ProfileAbout';
import ProfileTimeline from '../ProfileSections/ProfileTimeline/ProfileTimeline';


const Tab = styled(TabUnstyled)`
	color: #333;
	cursor: pointer;
	font-size: 1rem;
	background: #fff;
	padding: 15px 20px;
	border: none;
	/* border-bottom: 1px dotted #333; */
	/* border-radius: 10px; */
	width: 100%;
	display: flex;
	align-items: center;
	font-weight: 500;
	text-align: center;
  
	&.Mui-selected {
	  color: var(--tpdc);
	  font-weight: 700;
	}
  
	&:hover {
	  color: var(--tpdc);
	}
  
	&.${buttonUnstyledClasses.focusVisible} {
	  color: var(--tpdc);
	  outline: none;
	}
  
	&.${tabUnstyledClasses.selected} {
	  border-bottom: 2px solid var(--tpdc);
	}
  
	&.${buttonUnstyledClasses.disabled} {
	  opacity: 0.5;
	  cursor: not-allowed;
	  box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
	}
  `;

const TabPanel = styled(TabPanelUnstyled)`
	width: 100%;
  `;

const TabsList = styled(TabsListUnstyled)`
		margin-bottom: 10px;
	display: flex;
	align-content: center;
	justify-content: space-between;
  `;

const ProfileTabs = () => {
	return (
		<Box sx={{ pt: 0 }}>
			<TabsUnstyled defaultValue={0}>
				<TabsList>
					<Tab>Timeline</Tab>

					<Tab>About</Tab>

					<Tab>Friends</Tab>

					<Tab>Groups</Tab>

					<Tab>Photos</Tab>

					<Tab>Videos</Tab>

					<Tab>Favorites</Tab>

					<Tab>Badges</Tab>

					<Tab>Blogs</Tab>
				</TabsList>

				<Box sx={{ mt: 1 }} display="grid" gridTemplateColumns="repeat(12, 1fr)">

					{/* Left & Main Side */}
					<Box gridColumn="span 8" sx={{ p: 2 }}>

						<TabPanel value={0} sx={{p: 0}}><ProfileTimeline /></TabPanel>
						<TabPanel value={1}><ProfileAbout /></TabPanel>
						<TabPanel value={2}>Friends</TabPanel>
						<TabPanel value={3}>Groups</TabPanel>
						<TabPanel value={4}>Photos</TabPanel>
						<TabPanel value={5}>Videos</TabPanel>
						<TabPanel value={6}>Favorites</TabPanel>
						<TabPanel value={7}>Badges</TabPanel>
						<TabPanel value={8}>Blogs</TabPanel>

					</Box>

					{/* Right Side */}
					<Box gridColumn="span 4" sx={{ p: 2 }}>
						<RightSideBar />
					</Box>

				</Box>

			</TabsUnstyled>
		</Box>
	);
};

export default ProfileTabs;