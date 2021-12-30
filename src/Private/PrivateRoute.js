import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingComp from '../Components/Shared/LoadingComp/LoadingComp';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	let location = useLocation();
	const { user, isLoading } = useAuth();

	
	if (user?.email) {
		return children;
	}
	
	if (isLoading) { return <LoadingComp /> }
	return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;