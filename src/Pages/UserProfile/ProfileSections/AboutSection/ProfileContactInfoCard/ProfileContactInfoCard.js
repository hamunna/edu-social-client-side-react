import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const ProfileContactInfoCard = ({ user }) => {
	const { userId, userEmail, photoURL, contactInfo, workExperience, activityData } = user;

	return (
		<TableContainer component={Paper} sx={{ mb: 3, borderRadius: 2 }}>
			<Table aria-label="caption table">
				<TableHead>
					<TableRow sx={{ borderBottom: '1px solid #ccc' }}>
						<TableCell align="left" colSpan={2} sx={{ display: 'flex', alignItems: 'center', gap: 1, border: 'none', width: '100%', fontSize: 16, fontWeight: 700 }}>
							<ContactSupportIcon /> Contact Info
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

					<TableRow key={"row.name"} sx={{ border: 'none' }}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Email</TableCell>
						<TableCell align="left" sx={{ border: 'none' }}>{userEmail}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{ border: 'none' }}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Phone</TableCell>
						<TableCell align="left" sx={{ border: 'none' }}>{contactInfo.phone}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{ border: 'none' }}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>Website</TableCell>
						<TableCell align="left" sx={{ border: 'none' }}>{contactInfo.website}</TableCell>
					</TableRow>

					<TableRow key={"row.name"} sx={{ border: 'none' }}>
						<TableCell align="left" sx={{ width: '20%', fontWeight: 700, border: 'none' }}>social Sites</TableCell>
						{
							contactInfo.socialSites.map(socialSite => <a
								href={socialSite.link}								
								style={{ textDecoration: 'none', fontWeight: 700, color: "red" }}
							>
								<TableCell align="left" sx={{ border: 'none' }}>
									{socialSite.socialSiteName}
								</TableCell>
							</a>)
						}
						
					</TableRow>

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProfileContactInfoCard;