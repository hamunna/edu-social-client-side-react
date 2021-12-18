import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';

const ProfileBasicInfoCard = ({ user }) => {
	const { userId, userEmail, photoURL, basicInfo, contactInfo, workExperience, activityData } = user;
	
	return (
		<TableContainer component={Paper} sx={{mb: 3, borderRadius: 2}}>
			<Table aria-label="caption table">
				<TableHead>
					<TableRow sx={{borderBottom: '1px solid #ccc'}}>
						<TableCell align="left" colSpan={2} sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'none', width: '100%', fontSize: 16, fontWeight: 700 }}>
							<InfoIcon /> Basic Info
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

					<TableRow key={"row.name"}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Name</TableCell>
						
						<TableCell align="left" sx={{border: 'none'}}>{`${basicInfo.firstName} ${basicInfo.lastName}`}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Date of Birth</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>{basicInfo.birthDate}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Gender</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>{basicInfo.gender}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Email</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>{userEmail}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{border: 'none'}}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none'}}>Phone</TableCell>
						<TableCell align="left" sx={{border: 'none'}}>{contactInfo.contactInfo}</TableCell>
					</TableRow>

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfileBasicInfoCard;