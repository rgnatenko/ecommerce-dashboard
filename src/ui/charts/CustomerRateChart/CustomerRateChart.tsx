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

const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [40, 80, 60, 80, 60, 20, 60, 40, 60, 20].map(level => level),
      borderColor: '#0390F4',
      borderWidth: 2,
    },
    {
      label: '',
      data: [60, 85, 85, 85, 80, 82, 20, 20, 80, 100].map(level => level),
      borderColor: '#0390F4',
      borderWidth: 1,
      borderDash: [4, 4]
    },
    {
      label: '',
      data: [45, 45, 25, 60, 20, 65, 65, 22, 65, 65].map(level => level),
      borderColor: '#C7EBFF',
      borderWidth: 2,
    },
  ],
};

type Props = {
  classToAdd?: string
}

const CustomerRateChart: React.FC<Props> = ({ classToAdd }) => {
  return (
    <div className={classToAdd}>
      <Line options={options} data={data} />
    </div>
  );
};

export default CustomerRateChart;
