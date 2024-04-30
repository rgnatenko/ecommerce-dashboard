import React, { useState } from 'react';
import cn from 'classnames';
import BarItem from '../../ui/BarItem/BarItem';

type Props = {
  visible?: boolean
}

const Sidebar: React.FC<Props> = ({ visible }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('sidebar', {
      'sidebar--visible-on-phone': visible,
      'sidebar--open': isOpen
    })}>
      <BarItem
        title="Home"
        iconClass="home"
        iconDown
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className={cn('sidebar__list', {
        'sidebar__list--open': isOpen
      })}>
        <BarItem
          title="Statistics"
          to="statistics"
          classToAdd="bar-item--left-padding"
        />
      </div>
    </div>
  );
};

export default Sidebar;
