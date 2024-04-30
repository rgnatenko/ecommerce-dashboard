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
      ticks: {
        display: true,
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        padding: 10,
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

const labels = ['01 May', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '15 May', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '30 May'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [10, 20, 30, 30, 30, 25, 20, 20, 20, 20, 20, 30, 40, 50, 50, 50, 60, 70, 80, 90, 100, 110, 85, 60, 60, 60, 40, 20, 20, 30, 30, 30].map(level => level),
      borderColor: '#0390F4',
      borderWidth: 2,
    },
    {
      label: '',
      data: [20, 20, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 20, 40, 60, 60, 60, 70, 80, 90, 100, 70, 40, 45, 50, 60, 70, 65, 60, 55].map(level => level),
      borderColor: '#0390F4',
      borderWidth: 1,
      borderDash: [4, 4]
    },
  ],
};

const TotalSalesChart: React.FC = () => {
  return (
    <Line options={options} data={data} />
  );
};

export default TotalSalesChart;
