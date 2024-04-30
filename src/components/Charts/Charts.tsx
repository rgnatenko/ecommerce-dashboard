import React from 'react';
import VerticalChart from '../../ui/charts/VerticalChart/VerticalChart';
import VerticalTracker from '../../ui/charts/VerticalChart/VerticalTracker';
import DoughnutChart from '../../ui/charts/DoughnutChart/DoughnutChart';
import BulletChart from '../../ui/charts/BulletChart/BulletChart';
import ChartItem from '../ChartItem/ChartItem';

type Props = {
  chartsClassToAdd?: string
}

const Charts: React.FC<Props> = ({ chartsClassToAdd }) => {
  return (
    <div className={`${chartsClassToAdd} charts`}>
      <div className="charts__row">
        <ChartItem
          title="Advertising lineage"
          statistics={[
            { name: 'Completed', percent: 52, color: 'orange' },
            { name: 'Pending Payment', percent: 48, color: 'light-orange' }
          ]}
          amount={16.247}
          statisticsMessage='-3.4%'
          classToAdd='charts__chart--fw'
        >
          <>
            <VerticalChart />
            <VerticalTracker />
          </>
        </ChartItem>
      </div>

      <div className="charts__row">
        <ChartItem
          title="Most active users"
          statistics={[
            { name: 'With telegram premium', percent: 64, color: 'green' },
            { name: 'Without telegram premium', percent: 36, color: 'light-green' },
          ]}
          classToAdd='charts__chart'
        >
          <>
            <DoughnutChart />
          </>
        </ChartItem>

        <ChartItem
          title="Paying vs non paying"
          statistics={[
            { name: 'Paying customer', percent: 30, color: 'blue' },
            { name: 'Non-paying customer', percent: 70, color: 'light-grey' }
          ]}
          classToAdd='charts__chart'
        >
          <>
            <BulletChart />
          </>
        </ChartItem>
      </div>
    </div>
  );
};

export default Charts;
