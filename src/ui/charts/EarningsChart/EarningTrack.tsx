/* eslint-disable @typescript-eslint/no-explicit-any */

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
      gridLines: { display: false },
      border: { display: false }
    },

    y: {
      grid: { display: false },
      ticks: { display: false },
      border: { display: false }
    },
  },
  barThickness: 6,
  borderRadius: 20,
  borderSkipped: false,
  plugins: {
    legend: {
      display: false,
    },
  }
};

const labels = ['', '', '', '', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [44000, 20000, 48000, 45000, 30000, 47000, 26000, 36000, 38000, 42000].map(level => level),
      backgroundColor: '#C7EBFF',
    },
  ],
};

type Props = {
  classToAdd?: string
}

const EarningsTrack: React.FC<Props> = ({ classToAdd }) => {
  return (
    <div className={classToAdd}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default EarningsTrack;
