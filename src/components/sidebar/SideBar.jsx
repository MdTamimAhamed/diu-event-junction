import React, { useState } from "react";
import { BiSolidDashboard, BiLogOut } from "react-icons/bi";
import {
  MdAccountCircle,
  MdEvent,
  MdFavorite,
  MdGroups2,
  MdImage,
  MdSettings,
} from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navTitles = [
    {
      id: 1,
      title: "Dashboard",
      path: "dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      id: 2,
      title: "Profile",
      path: "admin-profile",
      icon: <MdAccountCircle />,
    },
    { id: 3, title: "Event", path: "#", icon: <MdEvent /> },
    { id: 4, title: "Favorite", path: "#", icon: <MdFavorite /> },
    { id: 5, title: "Clubs", path: "#", icon: <MdGroups2 /> },
    { id: 6, title: "Gallery", path: "#", icon: <MdImage /> },
    { id: 7, title: "Settings", icon: <MdSettings /> },
    { id: 8, title: "Logout", path: "logout", icon: <BiLogOut /> },
  ];

  const location = useLocation();
  const navigate = useNavigate();


  function handleActiveBtn(path) {
    navigate(path);
  }

  return (
    <>
      <div className=" w-[200px] h-[80vh] shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-white pt-3">
        <ul>

          {navTitles.map((item) => (
            <li key={item.id} className={`px-4 py-2`}>
              <span className={`flex items-center pl-7 py-2 rounded-md hover:bg-[rgba(0,0,0,0.1)] hover:text-black 
                  ${item.id === 8 ? " text-red hover:bg-red hover:text-white" : ""}
                  ${location.pathname.includes(item.path)? "bg-black text-white": ""}`}>

                {item.icon}
                  <span className="pl-1 cursor-pointer" onClick={() => handleActiveBtn(item.path)}>
                      {item.title}
                  </span>
              </span>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}

export default SideBar;
