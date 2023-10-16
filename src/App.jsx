import "./App.css";
import { Routes, Route } from "react-router-dom";

import Signup from "./components/signups/Signup";
import SignupForm from "./components/forms/SignupForm";
import AdminSignupForm from "./components/forms/AdminSignupForm";

import Login from "./components/logins/Login";
import LoginForm from "./components/forms/LoginForm";
import AdminLoginForm from "./components/forms/AdminLoginForm";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LayoutAdminDashboard from "./components/admin-dashboard/LayoutAdminDashboard";
import AdminProfile from "./profile/AdminProfile";
import Dashboard from "./components/admin-dashboard/Dashboard";
import CreateEventForm from "./components/event-forms/CreateEventForm";
import Logout from "./logout/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<LoginForm />} />
        <Route path="/admin-login" element={<AdminLoginForm />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/user-signup" element={<SignupForm />} />
        <Route path="/admin-signup" element={<AdminSignupForm />} />

        <Route path="/footer" element={<Footer />} />
        <Route path="/home" element={<Home />} />

        <Route element={<LayoutAdminDashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="admin-profile" element={<AdminProfile />}>
            <Route path="create-event" element={<CreateEventForm />} />
          </Route>
        </Route>
        <Route index path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
