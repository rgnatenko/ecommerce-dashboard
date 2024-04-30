import React from 'react';
import RegionType from '../../types/Region';
import calculatePercentage from '../../utils/calculatePercentage';
import { data } from '../../data';

type Props = {
  region: RegionType,
  index: number,
  classToAdd?: string
}

const UserItem: React.FC<Props> = ({ region, index, classToAdd }) => {
  const { regionsTotalData } = data;
  const { totalUsersAmount, totalTransactions, totalRevenue, totalConvRate } = regionsTotalData;

  return (
    <div className={`region ${classToAdd}`}>
      <div className="region__order-number">
        {index}.
      </div>

      <div className="region__country">
        <div className={`icon icon--${region.countryName}`}></div>
        {region.countryName}
      </div>

      <div className="region__users-amount">
        {region.users}
        <div className="region__percentage">
          ({calculatePercentage({ totalSum: totalUsersAmount, givenSum: region.users })})
        </div>
      </div>

      <div className="region__transactions">
        {region.transactions}
        <div className="region__percentage">
          ({calculatePercentage({ totalSum: totalTransactions, givenSum: region.transactions })})
        </div>
      </div>

      <div className="region__revenue">
        {region.revenue}
        <div className="region__percentage">
          ({calculatePercentage({ totalSum: totalRevenue, givenSum: region.revenue })})
        </div>
      </div>

      <div className="region__convRate">
        {region.convRate}
        <div className="region__percentage">
          ({calculatePercentage({ totalSum: totalConvRate , givenSum: region.convRate })})
        </div>
      </div>
    </div>
  );
};

export default UserItem;
