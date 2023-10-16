import React from "react";
import { useNavigate } from "react-router-dom";

function CreateEventForm() {
  function handleRoute() {
    window.location.href = "/admin-profile";
  }

  return (
    <>
      <div>CreateEventForm</div>
      <button onClick={handleRoute}>Back</button>
    </>
  );
}

export default CreateEventForm;
