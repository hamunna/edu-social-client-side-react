import React from 'react';
import { Box } from '@mui/system';
import { SocialIcon } from 'react-social-icons';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const bannerBg = {
	backgroundImage: `url("https://pub-static.fotor.com/assets/projects/pages/e371ae30-6e62-11ea-88fd-9dc4caa515cb_35208eee-d15a-4c33-8fb1-395791fa4789_thumb.jpg")`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '420px',
	marginTop: '50px',
	marginBottom: '50px',
	borderRadius: '20px',
	padding: '30px',
	boxShadow: 'inset 0px -260px 150px -100px #000',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'end',
}

const ProfileBanner = () => {
	return (
		<Box sx={bannerBg}>

			<ListItem>
				<ListItemAvatar sx={{ mr: 2 }}>
					<Avatar
						alt=""
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Sd1DjBd8dVAWNrUbZn7cpCz9-AET5gtpjcFGbOsYgx3NXwHZCy_qstvlsFbfZpRfxQQ&usqp=CAU"
						sx={{ width: 130, height: 130, border: '2px solid #ccc' }}
					/>
				</ListItemAvatar>

				<Box>
					<Typography sx={{ fontSize: 26, fontWeight: 500, color: '#fff', mb: 0 }}>Elon Musk</Typography>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
						<LocationOnIcon sx={{color: '#fff'}} />
						<Typography sx={{ fontSize: 16, fontWeight: 300, color: '#fff', mt: 0 }}>New York, USA</Typography>
					</Box>

					<Box sx={{ marginTop: '30px' }}>

						<SocialIcon network="facebook" url="https://facebook.com/hamunna15" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '10px' }} />

						<SocialIcon network="linkedin" url="https://linkedin.com/in/hamunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />

						<SocialIcon network="twitter" url="https://twitter.com/@HaMunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />

						<SocialIcon network="github" url="https://github.com/hamunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />

						<SocialIcon network="youtube" url="https://youtube.com/hamunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />

						<SocialIcon network="dribbble" url="https://dribbble.com/hamunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />

						<SocialIcon network="behance" url="https://behance.com/hamunna" style={{ height: 30, width: 30, border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff', marginRight: '8px' }} />
					</Box>

				</Box>

			</ListItem>

			<Box sx={{color: "#fff", display: 'flex', fontWeight: '300'}}>
				<Typography sx={{width: '130px'}}>Posts: 26</Typography>
				<Typography sx={{width: '130px'}}>Comments: 87</Typography>
				<Typography sx={{width: '130px'}}>Projects: 7</Typography>
			</Box>
		</Box>
	);
};

export default ProfileBanner;