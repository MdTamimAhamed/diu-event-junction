import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function AdminProfile() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <>
      <div>
        {active ? (<Outlet />) : (
          <Link to="create-event">
            <button onClick={() => setActive(true)} className=" bg-red p-2">
              + Add Event
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default AdminProfile;
