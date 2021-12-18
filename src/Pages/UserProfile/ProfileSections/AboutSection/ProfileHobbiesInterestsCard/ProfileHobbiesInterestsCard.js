import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InterestsIcon from '@mui/icons-material/Interests';

const ProfileHobbiesInterestsCard = ({ user }) => {
	const { hobbiesInterests } = user;

	return (
		<TableContainer component={Paper} sx={{ mb: 3, borderRadius: 2 }}>
			<Table aria-label="caption table">
				<TableHead>
					<TableRow sx={{ borderBottom: '1px solid #ccc' }}>
						<TableCell align="left" colSpan={2} sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'none', width: '300%', fontSize: 16, fontWeight: 700 }}>

							<InterestsIcon /> Interests &amp; Hobbies </TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Sports</TableCell>

						{
							hobbiesInterests.sports.map(sport => <TableCell align="left" sx={{ border: 'none' }}>{sport}</TableCell>)
						}

					</TableRow>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Books</TableCell>

						{
							hobbiesInterests.books.map(book => <TableCell align="left" sx={{ border: 'none' }}>{book}</TableCell>)
						}

					</TableRow>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Programming Technologies</TableCell>

						{
							hobbiesInterests.programmingTechnologies.map(tech => <TableCell align="left" sx={{ border: 'none' }}>{tech}</TableCell>)
						}

					</TableRow>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Hobbies</TableCell>

						{
							hobbiesInterests.hobbies.map(hobby => <TableCell align="left" sx={{ border: 'none' }}>{hobby}</TableCell>)
						}

					</TableRow>
					

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfileHobbiesInterestsCard;