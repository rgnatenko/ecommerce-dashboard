import React from 'react';
import TopTextSection from '../../ui/TopTextSection/TopTextSection';
import EarningsChart from '../../ui/charts/EarningsChart/EarningsChart';
import EarningTrack from '../../ui/charts/EarningsChart/EarningTrack';
import CustomerRateChart from '../../ui/charts/CustomerRateChart/CustomerRateChart';

export const ContentAnalytics: React.FC = () => {
  return (
    <div className="content-analytics">
      <div className="content-analytics__projection">
        <TopTextSection title="Projection vs actual" titleSize="h3">
          Actual earnings vs projected earnings on advertisiment ordering
        </TopTextSection>

        <div className="content-analytics__projection-legend">
          <div>
            <div className="square square--blue" />
            <p>Projected revenue</p>
          </div>

          <div>
            <div className="square square--light-blue" />
            <p>Actual revenue</p>
          </div>
        </div>

        <EarningsChart classToAdd="content-analytics__chart" />
        <EarningTrack classToAdd="content-analytics__track" />
      </div>

      <div className="content-analytics__customer-rate">
        <TopTextSection title="Returning customer rate" titleSize="h3">
          Rate of customers returning to your channel for advertisiment
        </TopTextSection>

        <div className="content-analytics__projection-legend">
          <div>
            <div className="square square--light-blue" />
            <p>Fourth time</p>
          </div>

          <div>
            <div className="square square--aqua" />
            <p>Third time</p>
          </div>


          <div>
            <div className="square square--blue" />
            <p>Second time</p>
          </div>
        </div>

        <CustomerRateChart classToAdd="content-analytics__chart" />
      </div>
    </div>
  );
};
