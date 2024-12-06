import React from 'react'
import { FaHome, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import bgImage from "../Images/doc.png"

const Sidebar = () => {
	return (
		<div className="bg-blue-950 text-white w-64 flex flex-col justify-between p-4">
			<div>
        <h1 className='text-lg font-semibold tracking-wide mb-8 ml-8'>VISION UI FREE</h1>
			<ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white'>
					<FaHome />
					<span className='inline'>Dashboard</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className=" hover:text-blue-400 ">Orders</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="hidden md:inline ">Customers</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="hidden md:inline ">Users</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="hidden md:inline ">Products</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="hidden md:inline ">Settings</span>
				</li>
			</ul>
      <h1 className='text-lg font-semibold mt-6 mb-2'>Account Pages</h1>
      <ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white'>
					<FaHome />
					<span className='hidden md:inline'>Dashboard</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-blue-400">
					<FaShoppingCart />
					<span className="hidden md:inline ">Orders</span>
				</li>
        </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 rounded-lg mt-4" 
        style={{backgroundImage:`url(${bgImage})`}}>
        <p className="mb-2 text-sm">Need help? Please check our docs</p>
        <button className="bg-blue-600 px-4 py-2 rounded text-sm">DOCUMENTATION</button>
      </div>
		</div>
	)
}

export default Sidebar;

