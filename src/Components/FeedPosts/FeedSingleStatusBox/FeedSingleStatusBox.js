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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Button, Card, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { Box } from '@mui/system';
import FeedPostCommentInputBox from '../FeedPostCommentInputBox/FeedPostCommentInputBox';
import FeedPostLoveCalculate from '../FeedPostLoveCalculate/FeedPostLoveCalculate';

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

const FeedSingleStatusBox = ({ status, dbUsers }) => {
	const { statusText, statusImages, statusCollections, _id, statusPosterId, statusPosterEmail } = status;

	const [expanded, setExpanded] = React.useState(false);

	const [dbUserData, setDbUserData] = useState([]);

	// Find Status Poster Data
	useEffect(() => {
		const findUser = dbUsers.find(dbUser => dbUser.email === statusPosterEmail);
		setDbUserData(findUser);
	}, [dbUsers]);


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
						src={dbUserData?.photoURL}
					>

					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={`${dbUserData?.basicInfo?.firstName} ${dbUserData?.basicInfo?.lastName}`}
				subheader="September 14, 2021"
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{statusText}
				</Typography>
			</CardContent>

			{
				statusImages?.length > 1 ? <ImageList
					key={_id}
					sx={{ width: '100%' }}
					cols={2}
				>
					{
						statusImages.map(statusImage => (
							<ImageListItem
								key={_id}>
								<img
									src={statusImage}
									alt=""
									loading="lazy"
								/>
							</ImageListItem>

						))}
				</ImageList>
					:
					statusImages.map(statusImage => <img
						key={_id}
						src={statusImage}
						style={{ width: '100%' }}
						alt=""
						loading="lazy"
					/>)
			}

			<CardActions disableSpacing>

				<FeedPostLoveCalculate status={status} />

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
				>{statusCollections?.comments?.length} Comments</Typography>

			</CardActions>


			{/* Status Comments Section */}
			<Collapse key={_id} in={expanded} timeout="auto" unmountOnExit sx={{ border: '1px solid #eee', p: 1 }}>

				{
					statusCollections?.comments?.map(comment => <Box
						key={_id}
						sx={{ backgroundColor: "#f7f7f7", borderRadius: 3, mb: 2 }}>

						{
							dbUsers.map(dbUser => dbUser?.email === comment.userEmail && <ListItem>
								<ListItemAvatar sx={{ mr: -1 }}>
									<Avatar
										alt=""
										src={dbUser?.photoURL}
										// src={comment?.userEmail === dbUserData && dbUserData?.photoURL}
										sx={{ width: 36, height: 36, border: '1px solid var(--tpdc)' }}
									/>
								</ListItemAvatar>
								<ListItemText
									secondary={`${dbUser?.basicInfo?.firstName} ${dbUser?.basicInfo?.lastName}`}
									sx={{ fontWeight: 700 }} />
							</ListItem>)
						}

						<Typography variant="body1" sx={{ px: 8, pb: 2 }}>
							{comment.statusCommentText}
						</Typography>
					</Box>

					)
				}

				<FeedPostCommentInputBox status={status} handleExpandClick={handleExpandClick} />

			</Collapse>
		</Card >
	);
};

export default FeedSingleStatusBox;