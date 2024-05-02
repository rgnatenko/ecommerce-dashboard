import React from 'react';
import TopTextSection from '../../ui/TopTextSection/TopTextSection';
import BlockedUsersChart from '../../ui/charts/BlockedUsersChart/BlockedUsersChart';
import ChartItem from '../../components/ChartItem/ChartItem';
import UsersList from '../../components/User/UserList';

const BlockedUsers: React.FC = () => (
  <div className="blocked-users">
    <TopTextSection
      title='Spam report'
      titleSize="h3"
      classToAdd='blocked-users__top'
    >
      Suspicious users were blocked
    </TopTextSection>

    <UsersList classToAdd='blocked-users__list' />

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
