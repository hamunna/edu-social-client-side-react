import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Button, Card, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { Box } from '@mui/system';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const FeedSingleStatusBox = ({ status }) => {
	const { statusText, statusImages, statusCollections } = status;

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ backgroundColor: '#fff', borderRadius: 2, p: 1, mb: 4 }}>

			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: red[500], border: '1px solid var(--tpdc)' }}
						aria-label="recipe"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Sd1DjBd8dVAWNrUbZn7cpCz9-AET5gtpjcFGbOsYgx3NXwHZCy_qstvlsFbfZpRfxQQ&usqp=CAU"
					>

					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Elon Musk"
				subheader="September 14, 2021"
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{statusText}
				</Typography>
			</CardContent>

			<ImageList sx={{ width: '100%' }} cols={2}>
				{
					statusImages.map(statusImage => (
						<ImageListItem key={statusImage.img}>
							<img
								src={statusImage}
								alt={statusImage}
								loading="lazy"
							/>
						</ImageListItem>
					))}
			</ImageList>


			<CardActions disableSpacing>
				<IconButton aria-label="Loves">
					<Badge badgeContent={statusCollections.loves} color="secondary">
						<FavoriteIcon sx={{ color: 'crimson' }} />
					</Badge>
				</IconButton>

				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
				<Typography
					sx={{ textAlign: 'right', cursor: 'pointer' }}
					onClick={handleExpandClick}
				>{statusCollections.comments.length} Comments</Typography>


			</CardActions>


			{/* Status Comments Section */}
			<Collapse in={expanded} timeout="auto" unmountOnExit sx={{ border: '1px solid #eee', p: 1 }}>


				{
					statusCollections.comments.map(comment => <Box sx={{ backgroundColor: "#f7f7f7", borderRadius: 3, mb: 2 }}>
						<ListItem>
							<ListItemAvatar sx={{ mr: -1 }}>
								<Avatar
									alt=""
									src="https://media.todaybirthdays.com/2015/09/28/mark-zuckerberg.jpg"
									sx={{ width: 36, height: 36 }}
								/>
							</ListItemAvatar>
							<ListItemText secondary="Mark Zuckerberg" sx={{ fontWeight: 700 }} />
						</ListItem>

						<Typography variant="body1" sx={{ px: 8, pb: 2 }}>
							{comment.statusCommentText}
						</Typography>
					</Box>

					)
				}

				<form style={{display: 'flex'}} autoComplete='off'>
					<Box
						sx={{
							width: '100%',
							borderRadius: 0,
						}}
					>
						<TextField
							type="text"
							fullWidth
							label="Write your comment here..."
						/>
					</Box>

					<Button variant="contained" className="theme-primary-btn">Comment</Button>
				</form>

			</Collapse>
		</Card >
	);
};

export default FeedSingleStatusBox;