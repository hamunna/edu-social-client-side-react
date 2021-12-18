import { UnsubscribeRounded } from "@mui/icons-material";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();

	// New User Register with Email & Password
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

	// Login User with Email & Password
	const loginUser = (email, password, navigate) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	// Observe User State Process
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
			  
				setUser(user);

			} else {
			  
				setUser({});
			}
		});
		return unsubscribe;
	}, []);

	// LogOut Functionalities
	const logOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	}

	return {
		user,
		registerUser,
		loginUser,
		logOut,
	}
}

export default useFirebase;