import React from 'react';
import BlockedUsers from '../../sections/BlockedUsers/BlockedUsers';
import ChannelStatistics from '../../sections/ChannelStatistics/ChannelStatistics';
import RegionsByRevenue from '../../sections/RegionsByRevenue/RegionsByRevenue';
import { ContentAnalytics } from '../../sections/ContentAnalytics/ContentAnalytics';

const TelegramStatistics: React.FC = () => {
  return (
    <div className="telegram-statistics">
      <ChannelStatistics />
      <BlockedUsers />
      <RegionsByRevenue />
      <ContentAnalytics />
    </div>
  );
};

export default TelegramStatistics;
