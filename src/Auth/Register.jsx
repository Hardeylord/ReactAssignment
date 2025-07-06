import { Apple } from "lucide-react";
import React from "react";
import { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";

export default function Register() {
  const [nameInput, SetnameInput] = useState(" ");
  const [mailInput, SetmailInput] = useState(" ");
  const [passwordInput, SetpasswordInput] = useState(" ");
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  function checkPwd(e) {
    let pwdValue = e.target.value;
    SetpasswordInput(pwdValue);
  }
  function checkMail(e) {
    let mailValue = e.target.value;
    SetmailInput(mailValue);
  }
  function checkName(e) {
    let nameValue = e.target.value;
    SetnameInput(nameValue);
  }
  function loggInOut() {
    // SetemailInput(e.target.value)
    if (!nameInput) {
      alert("enter the correct name");
    } else if (!mailInput) {
      alert(`enter a valid email`);
    } else if (!passwordInput) {
      alert("enter the correct password");
    } else {
      SetisLoggedIn(!isLoggedIn);
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <Sidebar />
      ) : (
        <div className="w-full flex-col md:flex-row bg-[#ECE7CD] flex justify-center items-center p-16">
          {/* part1 */}
          <div className="w-1/2  flex flex-col justify-center items-center">
            <div className="mb-4">
              <h1 className="text-center text-4xl font-light">
                Create Account
              </h1>
              <p className="text-center text-xs">
                Sing up and get 30 day free trial
              </p>
            </div>
            <div className="flex space-y-2 flex-col mb-5">
              <label onChange={checkName} className="mb-2">
                Full name:
              </label>
              <input
                type="text"
                className="bg-white rounded-3xl w-[350px] px-4 py-3"
                placeholder="Full-name"
              />
              <label className="mb-2">Email:</label>
              <input
                onChange={checkMail}
                type="email"
                className="bg-white rounded-3xl w-[350px] px-4 py-3"
                placeholder="E-mail"
              />
              <label className="mb-2">Password:</label>
              <input
                onChange={checkPwd}
                type="password"
                className="bg-white rounded-3xl w-[350px] px-4 py-3"
                placeholder="**********"
              />
            </div>
            <div>
              <button
                onClick={loggInOut}
                className="bg-[#FFD85F] mb-4 rounded-3xl w-[350px] px-4 py-3"
              >
                Submit
              </button>
              <div className="flex w-full space-x-2 justify-between">
                <div className="w-1/2 cursor-pointer flex space-x-3 items-center justify-center border-1 border-gray-600 rounded-3xl px-4 py-3">
                  <img
                    className="size-5"
                    src="/grommet-icons_apple.png"
                    alt=""
                  />{" "}
                  <p>Apple</p>
                </div>
                <div className="w-1/2 space-x-3 justify-center items-center flex border-1 border-gray-600 cursor-pointer rounded-3xl px-4 py-3">
                  <img className="size-5" src="/devicon_google.png" alt="" />
                  <p>Apple</p>
                </div>
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="w-1/2 md:flex hidden  justify-center items-center">
            <div className="h-full">
              <img
                className="rounded-3xl"
                src="/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
