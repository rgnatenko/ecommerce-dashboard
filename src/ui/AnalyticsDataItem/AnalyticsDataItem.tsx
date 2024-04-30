import React from 'react';

type Props = {
  title: string,
  text: string,
  iconName: string
  classToAdd?: string
}

const AnalyticsDataItem: React.FC<Props> = ({ title, text, iconName, classToAdd }) => (
  <div className={`data-item ${classToAdd}`}>
    <div className={`icon icon--${iconName}`} />

    <div>
      <h4>{title}</h4>
      <p className="text-body">{text}</p>
    </div>
  </div >
);

export default AnalyticsDataItem;
