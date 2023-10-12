import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/signups/Signup";
import SignupForm from "./components/forms/SignupForm";
import AdminSignupForm from "./components/forms/AdminSignupForm";

import Login from "./components/logins/Login";
import LoginForm from "./components/forms/LoginForm";
import AdminLoginForm from "./components/forms/AdminLoginForm";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AdminDashboard from "./components/admin-dashboard/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user-login" element={<LoginForm />} />
          <Route path="/admin-login" element={<AdminLoginForm />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/user-signup" element={<SignupForm />} />
          <Route path="/admin-signup" element={<AdminSignupForm />} />

          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
