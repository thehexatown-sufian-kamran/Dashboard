import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [400, 500, 450, 600],
        backgroundColor: ['white'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Quarterly Revenue',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-blue-900 p-6 rounded-lg shadow-md w-[40rem] ">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Quarterly Revenue Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
