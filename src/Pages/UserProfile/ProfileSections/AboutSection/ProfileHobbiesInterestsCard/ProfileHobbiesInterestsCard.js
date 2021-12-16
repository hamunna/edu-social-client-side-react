import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InterestsIcon from '@mui/icons-material/Interests';

const ProfileHobbiesInterestsCard = () => {
	return (
		<TableContainer component={Paper} sx={{mb: 3, borderRadius: 2}}>
			<Table aria-label="caption table">
				<TableHead>
					<TableRow sx={{borderBottom: '1px solid #ccc'}}>
						<TableCell align="left" colSpan={2} sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'none', width: '300%', fontSize: 16, fontWeight: 700 }}>
							<InterestsIcon /> Hobbies &amp; Interests
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Hobbies</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>Coding / Sleeping / Walking</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Favorite Books</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>Rich Dad Poor Dad / Habluder Jonno Programming / Connecting the dots</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Favorite Sports</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>Cricket / Football / Tennis</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Programming Language</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>JavaScript / PHP / Python</TableCell>
					</TableRow>

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfileHobbiesInterestsCard;