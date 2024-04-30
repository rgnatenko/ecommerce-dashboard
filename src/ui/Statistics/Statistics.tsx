import React from 'react';
import StatisticsType from '../../types/Statisctics';

type Props = {
  item: StatisticsType,
}

export const Statistics: React.FC<Props> = ({ item }) => {
  return (
    <div className="statistics">
      <div className="statistics__info">
        <div className={`square square--${item.color}`} />
        {item.name}
      </div>

      <p>{item.percent}%</p>
    </div>
  );
};
