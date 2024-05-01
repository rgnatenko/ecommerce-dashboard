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
      data: [100, 200, 300, 300, 300, 250, 200, 200, 200, 200, 200, 300, 400, 500, 500, 500, 600, 700, 800, 900, 1000, 1100, 850, 600, 600, 600, 400, 200, 200, 300, 300, 300].map(level => level),
      borderColor: '#0390F4',
      borderWidth: 2,
    },
    {
      label: '',
      data: [200, 200, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 400, 600, 600, 600, 700, 800, 900, 1000, 700, 400, 450, 500, 600, 700, 650, 600, 550].map(level => level),
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
