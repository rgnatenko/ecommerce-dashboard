import React from 'react';
import { data } from '../../data';
import TopTextSection from '../../ui/TopTextSection/TopTextSection';
import ItemsList from '../../ui/ItemsList/ItemsList';
import BlockedUsersChart from '../../ui/charts/BlockedUsersChart/BlockedUsersChart';
import ChartItem from '../../components/ChartItem/ChartItem';

const { getUsers } = data;

const BlockedUsers: React.FC = () => (
  <div className="blocked-users">
    <TopTextSection
      title='Spam report'
      titleSize="h3"
      classToAdd='blocked-users__top'
    >
      Suspicious users were blocked
    </TopTextSection>

    <ItemsList
      classToAdd='blocked-users__list'
      items={getUsers()}
      listType="users"
    />

    <ChartItem
      title="Blocked users"
      amount={15}
      classToAdd='blocked-users__chart'
    >
      <>
        <BlockedUsersChart />
      </>
    </ChartItem>
  </div>
);

export default BlockedUsers;
