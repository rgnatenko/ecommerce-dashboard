
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Percentage discount',
    'Fixed card discount',
  ],
  datasets: [
    {
      label: 'Discount',
      data: [64, 36],
      backgroundColor: [
        '#22C55E',
        '#D9FBD0',
      ],
      borderWidth: 1,
      spacing: 4,
      cutout: 48
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  }
};

const DoughnutChart: React.FC = () => {
  return <div className="chart__doughnut">
    <h3 className="chart__discount-percent">64%</h3>
    <Doughnut data={data} options={options} />
  </div>;
};

export default DoughnutChart;
