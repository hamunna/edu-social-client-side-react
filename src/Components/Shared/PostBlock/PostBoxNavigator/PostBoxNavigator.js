import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import StatusEditor from '../PostBoxEditors/StatusEditor/StatusEditor';
import MediaAlbumPosting from '../PostBoxEditors/MediaAlbumPosting/MediaAlbumPosting';
import BlogEditor from '../PostBoxEditors/BlogEditor/BlogEditor';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const primary = {
	50: '#F0F7FF',
	100: '#C2E0FF',
	200: '#80BFFF',
	300: '#66B2FF',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	700: '#0059B2',
	800: '#004C99',
	900: '#003A75',
};

const Tab = styled(TabUnstyled)`
	color: #333;
	cursor: pointer;
	font-size: 1rem;
	background: #fff;
	padding: 15px 20px;
	border: none;
	border-bottom: 1px dotted #333;
	border-radius: 10px;
	width: 100%;
	display: flex;
	align-items: center;
	font-weight: 500;
	text-align: center;
  
	&.Mui-selected {
	  color: #5854EF;
	  font-weight: 700;
	}
  
	&:hover {
	  color: ##5854EF;
	}
  
	&.${buttonUnstyledClasses.focusVisible} {
	  color: #5854EF;
	  outline: none;
	  /* background-color: ${primary[600]}; */
	  /* border-bottom: 2px solid ${primary[600]}; */
	}
  
	&.${tabUnstyledClasses.selected} {
	  border-bottom: 2px solid #5854EF;
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
	/* background-color: ${primary[500]}; */
	/* border-radius: 8px; */
	/* box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02); */
	/* padding: 0 10px 0 10px; */
	margin-bottom: 10px;
	display: flex;
	align-content: center;
	justify-content: space-between;
  `;

const PostBoxNavigator = () => {
	return (
		<Box sx={{ pt: 0 }}>
			<TabsUnstyled defaultValue={0}>
				<TabsList>
					<Tab sx={{borderRight: '1px dotted #333'}}><PostAddIcon sx={{mr: 1}} /> Status</Tab>
					<Tab sx={{borderRight: '1px dotted #333'}}><AddPhotoAlternateIcon sx={{mr: 1}} /> Photo/Video Album</Tab>
					<Tab><MenuBookIcon sx={{mr: 1}} /> Blog</Tab>
				</TabsList>

				<TabPanel value={0}><StatusEditor /></TabPanel>
				<TabPanel value={1}><MediaAlbumPosting /></TabPanel>
				<TabPanel value={2}><BlogEditor /></TabPanel>
			</TabsUnstyled>
		</Box>
	);
};

export default PostBoxNavigator;