import React from 'react';
import DasboardAnalytics from '../../components/DasboardAnalytics/DasboardAnalytics';
import Charts from '../../components/Charts/Charts';

const ChannelStatistics: React.FC = () => (
  <div className="telegram-statistics__channel-statistics channel-statistics">
    <DasboardAnalytics />
    <Charts chartsClassToAdd='channel-statistics__charts' />
  </div>
);

export default ChannelStatistics;
