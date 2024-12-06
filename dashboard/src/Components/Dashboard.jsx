import React from 'react'
import Card from './Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import SalesChart from './SalesChart'
import BarChart from './BarChart'
import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'

const Dashboard = () => {
  return (
    <>
    <div className='grow p-4 bg-gradient-to-b from-blue-900 to-blue-950 text-white w-full'>
       <div className="text-sm mb-2 text-gray-400">
         Pages / <span className="text-white">Dashboard</span>
       </div>
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6'>
            <Card title="Orders" value="140" percentage="0.1%" icon={<FaShoppingCart />}/>
            <Card title="Products" value="120" percentage="0.1%" icon={<FaBox />}/>
            <Card title="Users" value="30" percentage="0.1%" icon={<FaUsers />}/>
            <Card title="Settings" value="11" percentage="0.1%" icon={<FaCog />}/>
        </div>
        <div className="flex flex-row gap-4 mb-3 w-full">
          <SalesChart />
          <BarChart />
        </div>
      <div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
    </div>
    </>
  )
}

export default Dashboard

