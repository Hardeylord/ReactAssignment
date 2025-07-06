import React from 'react'
import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';

export default function Login() {

  // const [emailInput, SetemailInput] = useState("");
   const [isLoggedIn, SetisLoggedIn] = useState(false);
  // const [passwordInput, SetpasswordInput] = useState("");

  // function checkPwd(e) {
  //   let pwdValue = e.target.value;
  //   SetpasswordInput(pwdValue);
  // }
  // function checkEmail(e) {
  //   let emailValue = e.target.value;
  //   SetemailInput(emailValue);
  // }

  // function loggInOut() {
  //   // SetemailInput(e.target.value)
  //   if (!emailInput) {
  //     alert(`enter a valid email`);
  //     return;
  //   } else if (!passwordInput) {
  //     alert("enter the correct password");
  //     return;
  //   } else {
  //      SetisLoggedIn(!isLoggedIn);
  //   }
  // }
  const[formData, setformData]=useState({
    email:"",
    password:""
  })
  function handleChange(e) {
    const{name, value}=e.target
    setformData({...formData,[name]:value})
    console.log(formData);
  }

  const[formErrors, setformErrors]=useState({})
  // hell world
  function validateForm() {
    const errors={}
      if (!formData.email) {
        errors.email="empty email is not allowed"
      } else if (!formData.email.includes("@")) {
        errors.email="please enter a valid email address"
      }

      if (!formData.password) {
        errors.password="empty email is not allowed"
      } else if (formData.password.length < 5 || formData.password.length >10) {
        errors.password="password cant be less than 5 or greater than 10"
      }
      setformErrors(errors)
      return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm()
  }
  return (
    <>

    {isLoggedIn ? (
      <>
      <Sidebar />
       </>
    ) : (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">
                Sign in to your account
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                  {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <label
                    className="block text-gray-700 mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
                </div>

                {/* Submit */}
                <div>
                  {/* <button onClick={loggInOut} className="p-3 bg-red-600 rounded-xl text-white">Log in</button> */}
                  <button
                    // onClick={loggInOut}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Footer */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account?{" "}
                <Link to="/auth/signup" className="text-blue-600 hover:underline">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
    ) }
          
        </>
  )
}