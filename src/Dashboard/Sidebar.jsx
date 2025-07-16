import React from 'react'
import {LogOut} from "lucide-react"
import { useState } from 'react';

export default function Sidebar() {
  //  const [isLoggedIn, SetisLoggedIn] = useState(false);
  //  function loggInOut() {
  //       SetisLoggedIn(!isLoggedIn);
  //    }onClick={loggInOut}
  function reloadPage() {
    window.location.reload()
  }
  return (
    <>
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
    <div className='flex justify-between items-start'>
    <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
    <LogOut onClick={reloadPage} className='cursor-pointer'/>
    </div>
     <nav className="space-y-4 text-sm">
       <a href="#" className="block text-gray-700 hover:text-blue-600">Overview</a>
       <a href="#" className="block text-gray-700 hover:text-blue-600">Users</a>
       <a href="#" className="block text-gray-700 hover:text-blue-600">Sales</a>
       <a href="#" className="block text-gray-700 hover:text-blue-600">Settings</a>
     </nav>
   </aside>

   {/* Main Content */}
   <div className="flex-1 flex flex-col p-6">
         {/* Header */}
         <header className="mb-6">
           <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>
           <p className="text-sm text-gray-500">Here's a quick overview of your stats.</p>
         </header>
 
         {/* Dashboard Cards */}
         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Card 1 */}
           <div className="bg-white p-6 rounded-xl shadow">
             <h3 className="text-sm text-gray-500 mb-1">Total Users</h3>
             <p className="text-2xl font-bold">2,389</p>
           </div>
 
           {/* Card 2 */}
           <div className="bg-white p-6 rounded-xl shadow">
             <h3 className="text-sm text-gray-500 mb-1">Revenue</h3>
             <p className="text-2xl font-bold">$14,320</p>
           </div>
 
           {/* Card 3 */}
           <div className="bg-white p-6 rounded-xl shadow">
             <h3 className="text-sm text-gray-500 mb-1">Active Sessions</h3>
             <p className="text-2xl font-bold">187</p>
           </div>
         </section>
 
         {/* Optional Table or Chart Section */}
         <div className="mt-10 bg-white p-6 rounded-xl shadow">
           <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
           <p className="text-gray-500 text-sm">No recent updates available.</p>
         </div>
       </div>
     </div>
   </>
  )
}
