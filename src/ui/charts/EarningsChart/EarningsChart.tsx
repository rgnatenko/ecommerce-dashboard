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
      ticks: { display: true },
      gridLines: {
        display: false,
      },
      border: { display: false }
    },

    y: {
      grid: {
        display: true,
      },
      ticks: {
        callback: (label: any) => `$ ${label}`,
      },
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

const labels = ['Apr 13', '', '', '', 'Apr 17', '', '', '', 'Apr21', ''];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [40000, 29000, 32000, 48000, 30000, 27000, 25000, 30000, 28000, 30000].map(level => level),
      backgroundColor: '#2AABEE',
    },
  ],
};

type Props = {
  classToAdd?: string
}

const EarningsChart: React.FC<Props> = ({ classToAdd }) => {
  return (
    <div className={classToAdd}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default EarningsChart;
