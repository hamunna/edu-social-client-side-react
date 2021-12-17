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

function App() {
  return (
    <AuthProvider>
      <Router>

        <Routes>

          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
