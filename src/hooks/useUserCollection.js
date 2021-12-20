const useUserCollection = () => {

	const setDbUsers = dbUsers => {
		console.log(dbUsers)
		return dbUsers
	}

	fetch("http://localhost:5000/users")
		.then(res => res.json())
		.then(data => setDbUsers(data));

	// return setDbUsers();
}

export default useUserCollection;