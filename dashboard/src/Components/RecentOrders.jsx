
import React from 'react';

const recentOrderData = [
  {
    id: '1',
    product_id: '4324', // Replace with "Companies"
    customer_id: '23143', // Replace with "Members"
    customer_name: 'Shirley A. Lape',
    order_date: '2022-05-17T03:24:00',
    order_total: '$435.50',
    current_order_status: 'PLACED',
    shipment_address: 'Cottage Grove, OR 97424',
    company: 'ABC Corp', // Added company name for example
    member: 'Shirley A. Lape', // Added member for example
  },
  {
    id: '7',
    product_id: '7453',
    customer_id: '96453',
    customer_name: 'Ryan Carroll',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'CONFIRMED',
    shipment_address: 'Los Angeles, CA 90017',
    company: 'XYZ Inc.',
    member: 'Ryan Carroll',
  },
  {
    id: '2',
    product_id: '5434',
    customer_id: '65345',
    customer_name: 'Mason Nash',
    order_date: '2022-05-17T07:14:00',
    order_total: '$836.44',
    current_order_status: 'SHIPPED',
    shipment_address: 'Westminster, CA 92683',
    company: 'Global Tech',
    member: 'Mason Nash',
  },
  {
    id: '3',
    product_id: '9854',
    customer_id: '87832',
    customer_name: 'Luke Parkin',
    order_date: '2022-05-16T12:40:00',
    order_total: '$334.50',
    current_order_status: 'SHIPPED',
    shipment_address: 'San Mateo, CA 94403',
    company: 'Sunrise Ltd.',
    member: 'Luke Parkin',
  },
  {
    id: '4',
    product_id: '8763',
    customer_id: '09832',
    customer_name: 'Anthony Fry',
    order_date: '2022-05-14T03:24:00',
    order_total: '$876.00',
    current_order_status: 'OUT_FOR_DELIVERY',
    shipment_address: 'San Mateo, CA 94403',
    company: 'Pioneer LLC',
    member: 'Anthony Fry',
  },
  {
    id: '5',
    product_id: '5627',
    customer_id: '97632',
    customer_name: 'Ryan Carroll',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'DELIVERED',
    shipment_address: 'Los Angeles, CA 90017',
    company: 'Tech Giants',
    member: 'Ryan Carroll',
  },
];

function RecentOrders() {
  return (
    <div className="bg-blue-950 text-white px-4 pt-3 pb-3 rounded-lg  flex-1">
       <h2 className="text-xl font-bold">Projects</h2>
       <h2 className="text-lg font-semibold mb-3 ">30 Done this month</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Companies</th>
            <th className="px-4 py-2 text-left">Members</th>
            <th className="px-4 py-2 text-left">Order Date</th>
            <th className="px-4 py-2 text-left">Order Total</th>
            <th className="px-4 py-2 text-left">Current Status</th>
            <th className="px-4 py-2 text-left">Shipment Address</th>
          </tr>
        </thead>
        <tbody>
          {recentOrderData.map((order) => (
            <tr key={order.id} className="border-b border-gray-50">
              <td className="px-4 py-2">{order.company}</td>
              <td className="px-4 py-2">{order.member}</td>
              <td className="px-4 py-2">{new Date(order.order_date).toLocaleDateString()}</td>
              <td className="px-4 py-2">{order.order_total}</td>
              <td className="px-4 py-2">{order.current_order_status}</td>
              <td className="px-4 py-2">{order.shipment_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;

