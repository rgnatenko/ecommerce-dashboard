import React, { ReactNode } from 'react';
import StatisticsType from '../../types/Statisctics';
import { Statistics } from '../../ui/Statistics/Statistics';

type Props = {
  title: string,
  amount?: number,
  statistics?: StatisticsType[],
  children: ReactNode,
  statisticsMessage?: string,
  classToAdd?: string,
};

const ChartItem: React.FC<Props> = ({ title, amount, statistics, children, statisticsMessage, classToAdd }) => {
  return (
    <div className={`chart ${classToAdd}`}>
      <div className="chart__top">
        <div className="chart__info">
          <div className="chart__info-statistics">
            <h4>{title}</h4>
            {statisticsMessage && <p className='chart__statisticsMessage'>{statisticsMessage}</p>}
          </div>

          <p>Last 7 days</p>
        </div>

        {amount && <h4>{amount}</h4>}
      </div>

      <div className="chart__graphic">
        {children}
      </div>

      {statistics && (
        <div className="chart__statistics">
          {statistics.map(item => <Statistics
            key={item.name}
            item={item}
          />)}
        </div>
      )}
    </div>
  );
};

export default ChartItem;
