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

const labels = ['', '', '', '', '', '', '',];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => 200),
      backgroundColor: '#FFEFD8',
    },
  ],
};

const VerticalTracker: React.FC = () => {
  return (
    <Bar options={options} data={data} className="chart__vertical-tracker" />
  );
};

export default VerticalTracker;
