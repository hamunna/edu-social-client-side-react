import React, { useEffect, useState } from 'react';
import FeedStatusBoxes from '../../../../../Components/FeedPosts/FeedStatusBoxes/FeedStatusBoxes';
import PostBox from '../../../../../Components/Shared/PostBlock/PostBox/PostBox';
import ProfileTimelineSinglePost from '../ProfileTimelineSinglePost/ProfileTimelineSinglePost';

const ProfileTimelinePosts = ({ user }) => {
	const [timelinePosts, setTimelinePosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/statuses")
			.then(res => res.json())
			.then(data => setTimelinePosts(data));
	}, []);

	return (
		<>

			<PostBox />
			{
				timelinePosts.map(timelinePost => user?.email === timelinePost?.statusPosterEmail && <ProfileTimelineSinglePost
					key={timelinePost?._id}
					timelinePost={timelinePost}
					user={user}
				/>).reverse()
			}
		</>
	);
};

export default ProfileTimelinePosts;