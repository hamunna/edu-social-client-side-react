import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ForumIcon from '@mui/icons-material/Forum';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Button, CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useFirebase from '../../../hooks/useFirebase';

// Search Functionalities
const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));





const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const { user, logOut } = useFirebase();

	const [dbUsers, setDbUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then(res => res.json())
			.then(data => setDbUsers(data));
	}, []);


	// const dbUser = dbUsers.map(dbUser => dbUser)

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	// Swipeable Drawer Codes
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const linkStyle = {
		textDecoration: 'none',
		color: '#000',
		fontWeight: 700,
	}

	const list = (anchor) => (
		<Box
			sx={{ width: 270, borderRight: '2px solid var(--tpdc)', height: '100%' }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Toolbar className="theme-primary-drk-bg" sx={{ height: 80 }}>

				<Typography sx={{ fontSize: 26, fontWeight: 700, margin: 'auto' }}>

					<Link to="/" style={{ textDecoration: 'none' }}>
						<span className="theme-primary-lt-text" style={{ textShadow: '0 0 2px #fff' }}>Edu</span>
						<span style={{ color: '#fff' }}>Social</span>
					</Link>

				</Typography>

			</Toolbar>

			<List>

				{
					dbUsers.map(dbUser => user?.email === dbUser?.email && <ListItem style={linkStyle} as={Link} to={`/myProfile/${dbUser._id}`} button>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>

						<ListItemText>My Profile</ListItemText>
					</ListItem>
					)
				}

				<ListItem style={linkStyle} as={Link} to="/" button key={'newsFeed'}>
					<ListItemIcon>
						<FeedIcon />
					</ListItemIcon>

					<ListItemText>News Feed</ListItemText>
				</ListItem>

			</List>

			<Divider />

			<List>

				{!user?.email ? <>
					<ListItem style={linkStyle} as={Link} to="/login" button>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>

						<ListItemText>Login</ListItemText>
					</ListItem>

					<ListItem style={linkStyle} as={Link} to="/register" button>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>

						<ListItemText>Register</ListItemText>
					</ListItem>
				</>
					:

					<ListItem style={linkStyle} button onClick={logOut}>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>

						<ListItemText>Logout</ListItemText>
					</ListItem>
				}
			</List>
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>

			<AppBar position="fixed">
				<Toolbar className="theme-primary-lt-bg">

					<Box sx={{ position: 'relative', left: -24, top: 0 }} className="theme-primary-drk-bg">
						<IconButton
							size="large"
							// edge="center"
							color="inherit"
							aria-label="open drawer"
							sx={{ height: 80, width: 100 }}
						>

							<div>
								{['left'].map((anchor) => (
									<React.Fragment key={anchor}>
										<Button onClick={toggleDrawer(anchor, true)}>
											<WidgetsIcon sx={{ color: 'white', fontSize: 30 }} />

										</Button>

										<SwipeableDrawer
											anchor={anchor}
											open={state[anchor]}
											onClose={toggleDrawer(anchor, false)}
											onOpen={toggleDrawer(anchor, true)}
										>

											{list(anchor)}

										</SwipeableDrawer>
									</React.Fragment>
								))}
							</div>
						</IconButton>
					</Box>

					<Typography
						noWrap
						component="div"
						sx={{ display: { xs: 'none', sm: 'block', fontSize: 26, fontWeight: 700, margin: 'auto' } }}
					>

						<Link to="/" style={{ textDecoration: 'none' }}>
							<span className="theme-primary-lt-text" style={{ textShadow: '0 0 2px #fff' }}>Edu</span>
							<span style={{ color: '#fff' }}>Social</span>
						</Link>

					</Typography>

					<Search sx={{ mx: 'auto' }}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							sx={{ width: '30vw' }}
						/>
					</Search>

					<Box sx={{ flexGrow: 1 }} />

					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>

						<IconButton size="large" aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="error">
								<MailIcon />
							</Badge>
						</IconButton>


						<IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<Badge badgeContent={17} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							// edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>

					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>

					<Box sx={{ position: 'relative', right: -24, top: 0 }} className="messenger-primary-lt-bg">
						<IconButton
							size="large"
							// edge="center"
							color="inherit"
							aria-label="open drawer"
							sx={{ height: 80, width: 100 }}
						>
							<ForumIcon sx={{ fontSize: 36 }} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};

export default Header;