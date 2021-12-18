import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import FeedSingleStatusBox from '../FeedSingleStatusBox/FeedSingleStatusBox';

const FeedStatusBoxes = () => {
	const [statuses, setStatuses] = useState([]);

	useEffect(() => {
		fetch("./statusData.json")
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