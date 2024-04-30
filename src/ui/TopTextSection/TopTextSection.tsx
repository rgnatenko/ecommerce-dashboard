import React, { ReactNode } from 'react';

type Props = {
  title: string,
  children: ReactNode,
  classToAdd?: string,
  titleSize: 'h2' | 'h3'
}

const TopTextSection: React.FC<Props> = ({ title, children, classToAdd, titleSize }) => (
  <div className={`top-text-section ${classToAdd}`}>
    {titleSize === 'h2' && <h2>{title}</h2>}
    {titleSize === 'h3' && <h3>{title}</h3>}
    <p className='text-body' style={{ fontSize: '16px' }}>{children}</p>
  </div>
);

export default TopTextSection;
