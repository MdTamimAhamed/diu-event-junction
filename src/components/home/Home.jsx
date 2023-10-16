import React from "react";
import { Link } from "react-router-dom";

//note: This is the home page before login

function Home() {
  return (
    <>
      <div className="pl-5">
        <h1>Home</h1>
        <p>
          This is the page before login! To access anything of the website, you
          have to login.
        </p>
        <Link to="/login">
          <button className="bg-red px-3 py-1">Login</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
