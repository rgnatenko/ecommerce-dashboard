import { Gauge, gaugeClasses } from '@mui/x-charts';
import React from 'react';

const BulletChart: React.FC = () => (
  <Gauge
    cornerRadius="50%"
    width={150}
    height={115}
    value={30}
    startAngle={-90}
    endAngle={90}
    sx={() => ({
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 0
      },
      [`& .${gaugeClasses.valueArc}`]: {
        fill: '#0390F4',
      },
      [`& .${gaugeClasses.referenceArc}`]: {
        fill: '#E3E4EC',
      },
    })}
  />
);

export default BulletChart;
