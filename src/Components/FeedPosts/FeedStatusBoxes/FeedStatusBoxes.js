import React, { useEffect, useState } from 'react';
import FeedSingleStatusBox from '../FeedSingleStatusBox/FeedSingleStatusBox';

const FeedStatusBoxes = () => {
	const [statuses, setStatuses] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/statuses")
			.then(res => res.json())
			.then(data => setStatuses(data));
	}, []);
	return (

		<>
			{
				statuses.map(status => <FeedSingleStatusBox
					key={status.statusId}
					status={status}
				/>)
			}
		</>

	);
};

export default FeedStatusBoxes;