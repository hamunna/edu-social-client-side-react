import React from 'react';
import { Box } from '@mui/system';
import { SocialIcon } from 'react-social-icons';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';



// const bannerBg = {
// 	backgroundImage: `url("https://www.dlapiper.com/~/media/images/news/2018/programming_code_technology_computerwebsite_banner_432008923.jpg")`,
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'cover',
// 	height: '420px',
// 	marginTop: '50px',
// 	marginBottom: '50px',
// 	borderRadius: '20px',
// 	padding: '30px',
// 	boxShadow: 'inset 0px -260px 150px -100px #000',
// 	boxSizing: 'border-box',
// 	display: 'flex',
// 	alignItems: 'end',
// }

const ProfileBanner = ({ user }) => {

	// const { photoURL, basicInfo, contactInfo, bannerImageURL } = user;

	return (
		<Box sx={{
			backgroundImage: `url(${user?.bannerImageURL})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '420px',
			mt: 3,
			mb: 3,
			borderRadius: 8,
			padding: '30px',
			boxShadow: 'inset 0px -260px 150px -100px #000',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'end',
		}}>

			<ListItem>
				<ListItemAvatar sx={{ mr: 2 }}>
					<Avatar
						alt=""
						src={user?.photoURL}
						sx={{ width: 130, height: 130, border: '2px solid #ccc' }}
					/>
				</ListItemAvatar>

				<Box>
					<Typography sx={{ fontSize: 26, fontWeight: 500, color: '#fff', mb: 0 }}>{`${user?.basicInfo?.firstName} ${user?.basicInfo?.lastName}`}</Typography>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LocationOnIcon sx={{ color: '#fff' }} />
						<Typography sx={{ fontSize: 16, fontWeight: 300, color: '#fff', mt: 0 }}>{`${user?.contactInfo?.address?.city}, ${user?.contactInfo?.address?.country}`}</Typography>
					</Box>

					<Box sx={{ marginTop: '30px' }}>

						{
							user?.contactInfo?.socialSites.map(socialSite => <SocialIcon
								key={socialSite?.link}
								network={socialSite?.socialSiteName.toLowerCase()}
								url={socialSite?.link}
								style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '10px' }} />)
						}

					</Box>

				</Box>

			</ListItem>

			<Box sx={{ color: "#fff", display: 'flex', fontWeight: '300' }}>
				<Typography sx={{ width: '130px' }}>Posts: 26</Typography>
				<Typography sx={{ width: '130px' }}>Comments: 87</Typography>
				<Typography sx={{ width: '130px' }}>Projects: 7</Typography>
			</Box>
		</Box>
	);
};

export default ProfileBanner;