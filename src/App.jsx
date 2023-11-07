import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./components/signups/Signup";
import Login from "./components/logins/Login";
import Home from "./components/home/Home";
import HomeLayout from "./components/home/HomeLayout";

import LayoutAdminDashboard from "./components/admin-dashboard/LayoutAdminDashboard";
import AdminProfile from "./components/profile/AdminProfile";
import Dashboard from "./components/admin-dashboard/Dashboard";
import CreateEventForm from "./components/event-forms/CreateEventForm";
import Logout from "./components/logout/Logout";

import EditEvent from "./pages/EditPages/EditEvent";

import ProtectedRoute from "./components/protected-route/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Private routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<LayoutAdminDashboard/>} userRole = 'Admin'/>}>
          <Route index element={<Dashboard />} />
          <Route path="edit/:eventId" element={<EditEvent />} />
          <Route path="admin-profile" element={<AdminProfile />}>
            <Route path="create-event" element={<CreateEventForm />} />
          </Route>
          <Route index path="logout" element={<Logout />} />
        </Route>

        {/* User Private routes */}
        <Route path="/home" element={<ProtectedRoute element={<HomeLayout/>} userRole='Client'/>}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
