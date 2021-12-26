const useUserCollection = () => {

	const setDbUsers = dbUsers => {
		console.log(dbUsers)
		return dbUsers
	}

	fetch("https://warm-basin-63118.herokuapp.com/users")
		.then(res => res.json())
		.then(data => setDbUsers(data));

	// return setDbUsers();
}

export default useUserCollection;