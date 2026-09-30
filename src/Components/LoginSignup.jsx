import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");
  return (
    <div className=" w-full h-screen bg-gradient-to-b from-blue-600 to-purple-800 py-10">
      <div className=" max-w-[1000px] py-10 m-auto h-full bg-white px-4">
        <div className="">
          <div className=" flex flex-col items-center">
            <h3 className="text-purple-800 text-2xl font-semibold mb-1">
              {action}
            </h3>
            <hr className=" w-[61px] h-[6px] bg-purple-800 rounded-[9px]" />
          </div>
          <div className="py-10 mx-auto w-full md:w-[500px]">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className=" flex items-center gap-2 bg-gray-200 w-full h-[50px] px-4">
                <FaUser size={24} className="text-gray-500" />
                <input type="Name" placeholder="Name" />
              </div>
            )}

            {/* Email */}
            <div className="flex items-center gap-2 w-full my-5 bg-gray-200 h-[50px] px-4">
              <HiOutlineMail size={24} className="text-gray-500" />
              <input type="Email" placeholder="Email id" />
            </div>
            {/* password */}
            <div className=" flex items-center gap-2 w-full bg-gray-200 h-[50px] px-4">
              <RiLockPasswordFill size={24} className=" text-gray-500" />
              <input type="password" placeholder="Password" />
            </div>
            {/* lost password */}
            {action === "Sign up" ? (
              <div></div>
            ) : (
              <div className=" mt-[27px]">
                Lost password?{" "}
                <span className=" cursor-pointer text-purple-800">
                  Click here!
                </span>
              </div>
            )}
          </div>
          {/* submit button */}
          <div className=" w-full md:w-[500px] m-auto flex  items-center justify-center gap-10">
            <button
              className={action === "Login " ? "Submit gray" : "Submit"}
              onClick={() => {
                setAction("Sign up");
              }}
            >
              Sign up
            </button>
            <button
              className={action === "Sign up" ? "Submit gray" : "Submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
