import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();

	const registerUser = (email, password, name, navigate) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	}

	return {
		user,
		registerUser,
	}
}

export default useFirebase;