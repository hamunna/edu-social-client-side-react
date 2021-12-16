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

function App() {
  return (
    <Router>
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
