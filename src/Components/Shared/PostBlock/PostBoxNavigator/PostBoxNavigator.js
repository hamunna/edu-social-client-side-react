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

const PostBoxNavigator = () => {
	return (
		<Box sx={{ pt: 0 }}>
			<TabsUnstyled defaultValue={0}>
				<TabsList>
					<Tab sx={{ borderRight: '1px dotted #333' }}><PostAddIcon sx={{ mr: 1 }} /> Status</Tab>
					<Tab sx={{ borderRight: '1px dotted #333' }}><AddPhotoAlternateIcon sx={{ mr: 1 }} /> Photo/Video Album</Tab>
					<Tab><MenuBookIcon sx={{ mr: 1 }} /> Blog</Tab>
				</TabsList>

				<TabPanel value={0}><StatusEditor /></TabPanel>
				<TabPanel value={1}><MediaAlbumPosting /></TabPanel>
				<TabPanel value={2}><BlogEditor /></TabPanel>
			</TabsUnstyled>
		</Box>
	);
};

export default PostBoxNavigator;