import "./App.css";
import { Routes, Route } from "react-router-dom";

import Signup from "./components/signups/Signup";
import Login from "./components/logins/Login";
import Home from "./components/home/Home";

import LayoutAdminDashboard from "./components/admin-dashboard/LayoutAdminDashboard";
import AdminProfile from "./components/profile/AdminProfile";
import Dashboard from "./components/admin-dashboard/Dashboard";
import CreateEventForm from "./components/event-forms/CreateEventForm";
import Logout from "./components/logout/Logout";

import ProtectedRoutes from "./components/protected-route/ProtectedRoutes";

function App() {

  const isAuthenticated = localStorage.getItem('admin-token')
  return (
    <>
      <Routes>
        {/*public routed*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/*private routes*/}
          <Route path="/" element={<LayoutAdminDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin-profile" element={<AdminProfile />}>
              <Route path="create-event" element={<CreateEventForm />} />
            </Route>
            <Route index path="logout" element={<Logout />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
