
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Sales ($)',
        data: [5000, 7000, 8000, 6000, 9500, 12000, 15000, 11000, 16000, 18000, 20000, 22000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Profit ($)',
        data: [2000, 3000, 4000, 3500, 5000, 7000, 9000, 8500, 10000, 11000, 12000, 13000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales and Profit Over the Year',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };

  return (
    <div className="bg-blue-950 p-6 rounded-lg shadow-md flex-1">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Sales and Profit Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;

