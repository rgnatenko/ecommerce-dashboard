import React from 'react';
import TopTextSection from '../../ui/TopTextSection/TopTextSection';
import ItemsList from '../../ui/ItemsList/ItemsList';
import { data } from '../../data';
import Map from '../../ui/Map/Map';

const RegionsByRevenue: React.FC = () => {
  const { getRegions } = data;
  return (
    <div className="regions-by-revenue">
      <TopTextSection
        title='Top 5 regions by revenue'
        titleSize="h3"
        classToAdd="regions-by-revenue__top"
      >
        Where you generated most of the revenue
      </TopTextSection>

      <ItemsList
        listType="regions"
        items={getRegions()}
        classToAdd="regions-by-revenue__list"
      />

      <Map  mapClass="regions-by-revenue__map" />
    </div>
  );

};

export default RegionsByRevenue;
