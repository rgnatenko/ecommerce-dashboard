import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        padding: 10
      },
      gridLines: {
        display: false,
      },
      border: {
        display: false,
      }
    },

    y: {
      grid: {
        display: false,
      },
      ticks: { display: false },
      gridLines: {
        display: false,
      },
      border: { display: false }
    },
  },
  elements: {
    point: {
      radius: 0,
    }
  }
};

const labels = ['01 May', '', '', '', '', '', '07 May'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [15, 10, 30, 20, 25, 18, 25].map(level => level),
      borderColor: '#E3E4EC',
    },
    {
      label: '',
      data: [20, 15, 25, 10, 50, 40, 60].map(level => level),
      borderColor: '#DC5858',
    },
  ],
};

const BlockedUsersChart: React.FC = () => {
  return (
    <div className="chart__blocked-users-bar">
      <Line options={options} data={data} />
    </div>
  );
};

export default BlockedUsersChart;
