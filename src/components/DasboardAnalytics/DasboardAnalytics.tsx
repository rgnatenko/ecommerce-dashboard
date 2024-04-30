import React from 'react';
import AnalyticsDataItem from '../../ui/AnalyticsDataItem/AnalyticsDataItem';
import TotalSalesChart from '../../ui/charts/TotalSalesChart/TotalSalesChart';
import TopTextSection from '../../ui/TopTextSection/TopTextSection';

const DasboardAnalytics: React.FC = () => {
  const analytics = [
    { title: '57 new followers', text: 'Successfully joined', iconName: 'followers' },
    { title: '5 join requests', text: 'On review', iconName: 'join' },
    { title: '15 suspicious users', text: 'Blocked', iconName: 'blocked' },
  ];

  return (
    <div className="channel-statistics__analytics analytics">
      <TopTextSection
        title='Your channel statistics'
        titleSize="h2"
        classToAdd='analytics__top'
      >
        See what’s going on at your channel right now
      </TopTextSection>

      <div className="analytics__data">
        {analytics.map(item => (
          <AnalyticsDataItem
            title={item.title}
            text={item.text}
            iconName={item.iconName}
            key={item.iconName}
          />
        ))}
      </div>

      <div className="analytics__chart">
        <TotalSalesChart />
      </div>
    </div>
  );

};

export default DasboardAnalytics;
