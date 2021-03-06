import React, { useEffect, useState } from 'react';
import FeedSingleStatusBox from '../FeedSingleStatusBox/FeedSingleStatusBox';

const FeedStatusBoxes = ({ dbUsers }) => {
	const [statuses, setStatuses] = useState([]);

	useEffect(() => {
		fetch("https://warm-basin-63118.herokuapp.com/statuses")
			.then(res => res.json())
			.then(data => setStatuses(data));
	}, []);


	return (

		<>
			{
				statuses.map(status => <FeedSingleStatusBox
					key={status?._id}
					status={status}
					dbUsers={dbUsers}
				/>).reverse()
			}
		</>

	);
};

export default FeedStatusBoxes;