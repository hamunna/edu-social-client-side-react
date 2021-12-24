import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';

const FriendsWidget = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then(res => res.json())
			.then(data => setFriends(data))
	}, []);

	const linkStyle = {
		textDecoration: 'none',
		color: '#000',
		fontWeight: 700,
	}

	return (

		<Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 2, mb: 4 }}>

			<Box sx={{ borderBottom: '1px solid #f2f2f2', fontSize: "18px", fontWeight: 700, mb: 2, pb: 1 }}>
				<Typography gutterBottom component="h3" sx={{ fontSize: 18, fontWeight: 700, display: 'flex', alignItem: 'center', gap: 1 }}>
					<PeopleAltIcon /> Friends
				</Typography>
			</Box>

			<Box>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

					{
						friends.map(friend => <ListItem key={friend?._id} style={linkStyle} as={Link} to={`/userProfile/${friend?._id}`}>
							<ListItemAvatar sx={{ mr: 2 }}>
								<Avatar
									alt=""
									src={friend?.photoURL}
									sx={{ width: 48, height: 48 }}
								/>
							</ListItemAvatar>
							<ListItemText primary={`${friend?.basicInfo?.firstName} ${friend?.basicInfo?.lastName}`} secondary="Jan 9, 2014" />
						</ListItem>
						)
					}

				</List>
			</Box>

			<Box sx={{ borderTop: '1px solid #f2f2f2', fontSize: "18px", fontWeight: 700, mt: 2, pt: 1, textAlign: 'center' }}>
				<Button>See all friends (18)</Button>
			</Box>

		</Box>
	);
};

export default FriendsWidget;