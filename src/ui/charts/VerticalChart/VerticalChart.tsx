import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: { display: false },
      gridLines: {
        display: false,
      },
      border: { display: false }
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
  barThickness: 4,
  borderRadius: 20,
  borderSkipped: false,
  plugins: {
    legend: {
      display: false,
    },
  }
};

const labels = ['120', '200', '150', '80', '70', '110', '120'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [12, 20, 15, 8, 7, 11, 12].map(level => level),
      backgroundColor: '#E5780B',
    },
  ],
};

const VerticalChart: React.FC = () => {
  return (
    <Bar options={options} data={data} className="chart__vertical-bar"/>
  );
};

export default VerticalChart;
