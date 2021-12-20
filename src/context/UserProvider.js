import React, { createContext } from "react";
import useUserCollection from "../hooks/useUserCollection";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const allUsersContext = useUserCollection();

	return (
		<UserContext.Provider value={allUsersContext}>
			{children}
		</UserContext.Provider>
	);
};

const withUser = (Child) => (props) => (
	<UserContext.Consumer>
		{(context) => <Child {...props} {...context} />}
		{/* Another option is:  {context => <Child {...props} context={context}/>}*/}
	</UserContext.Consumer>
);

export { UserProvider, withUser };