import './assets/css/global.css';
import Header from './Components/Shared/Header/Header';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import ProfilePage from './Pages/UserProfile/ProfilePage/ProfilePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/Register/Register';
import PrivateRoute from './Private/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import OwnUserProfile from './Pages/UserProfile/OwnUserProfile/OwnUserProfile';
import { UserProvider } from './context/UserProvider';
import { useEffect, useState } from 'react';

function App() {
  const [dbUsers, setDbUsers] = useState([]);

  useEffect(() => {
    fetch("https://warm-basin-63118.herokuapp.com/users")
      .then(res => res.json())
      .then(data => setDbUsers(data));
  }, []);

  return (
    // <UserProvider>
    <AuthProvider>
      <Router>

        <Routes>

          {/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} /> */}

          <Route path="/" element={<Home dbUsers={dbUsers} />} />

          <Route path="/myProfile/:userId" element={<OwnUserProfile />} />

          <Route path="/userProfile/:userId" element={<ProfilePage dbUsers={dbUsers} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
    </AuthProvider>
    // {/* </UserProvider> */}
  );
}

export default App;
