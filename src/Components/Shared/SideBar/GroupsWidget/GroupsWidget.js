import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const GroupsWidget = () => {
	return (

		<Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 2, mb: 4 }}>

			<Box sx={{ borderBottom: '1px solid #f2f2f2', fontSize: "18px", fontWeight: 700, mb: 2, pb: 1 }}>
				<Typography variant="h6" gutterBottom component="h3">
					Groups
				</Typography>
			</Box>

			<Box>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

					<ListItem>
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								alt=""
								src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
								sx={{ width: 48, height: 48 }}
							/>
						</ListItemAvatar>
						<ListItemText primary="Mark Zuckerberg" secondary="Jan 9, 2014" />
					</ListItem>

					<ListItem>
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								alt=""
								src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
								sx={{ width: 48, height: 48 }}
							/>
						</ListItemAvatar>
						<ListItemText primary="Mark Zuckerberg" secondary="Jan 9, 2014" />
					</ListItem>

					<ListItem>
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								alt=""
								src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
								sx={{ width: 48, height: 48 }}
							/>
						</ListItemAvatar>
						<ListItemText primary="Mark Zuckerberg" secondary="Jan 9, 2014" />
					</ListItem>

					<ListItem>
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								alt=""
								src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
								sx={{ width: 48, height: 48 }}
							/>
						</ListItemAvatar>
						<ListItemText primary="Mark Zuckerberg" secondary="Jan 9, 2014" />
					</ListItem>

				</List>
			</Box>

			<Box sx={{ borderTop: '1px solid #f2f2f2', fontSize: "18px", fontWeight: 700, mt: 2, pt: 1, textAlign: 'center' }}>
				<Button>See all groups (6)</Button>
			</Box>

		</Box>
	);
};

export default GroupsWidget;