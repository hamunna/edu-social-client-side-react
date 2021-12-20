import React, { useEffect, useState } from 'react';
import FeedSingleStatusBox from '../FeedSingleStatusBox/FeedSingleStatusBox';

const FeedStatusBoxes = ({ dbUsers }) => {
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
					key={status._id}
					status={status}
					dbUsers={dbUsers}
				/>)
			}
		</>

	);
};

export default FeedStatusBoxes;