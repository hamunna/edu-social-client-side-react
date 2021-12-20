import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const useDbUsers = () => {
	return useContext(UserContext);
}

export default useDbUsers;