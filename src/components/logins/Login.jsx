import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import AdminLoginForm from "../forms/AdminLoginForm";
import RoleSelectBtn from "../../Utilities/buttons/RoleSelectBtn";

function Login() {
  const [selectRole, setSelectRole] = useState("");

  return (
    <>
      <div>
        <p className=" text-center">Ahsan: Put the header here...</p>
      </div>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <div className=" w-[300px] bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] flex justify-between items-center gap-2 mb-6 p-[5px] rounded-md">
          <RoleSelectBtn
            type="button"
            role="user"
            btnName="User"
            state={selectRole}
            setState={setSelectRole}
          />

          <RoleSelectBtn
            type="button"
            role="admin"
            btnName="Admin"
            state={selectRole}
            setState={setSelectRole}
          />
        </div>
        {selectRole === "admin" ? <AdminLoginForm /> : <LoginForm />}
      </div>

      <footer className="flex justify-center text-xs text-gray">
        <p>
          DIU Event Junction (Tamim.Ahsan.Prantik.Sraboni.Maliha) &copy; 2023 |
          All right reserved.
        </p>
      </footer>
    </>
  );
}

export default Login;
