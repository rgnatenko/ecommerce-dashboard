import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  title: string,
  to?: string,
  iconClass?: string,
  iconDown?: boolean,
  onClick?: () => void,
  isOpen?: boolean,
  classToAdd?: string
}

const BarItem: React.FC<Props> = ({ title, to, iconClass, iconDown, onClick, classToAdd, isOpen }) => {
  const barItemClass = ({ isActive }: { isActive: boolean }) => {
    return cn(`bar-item ${classToAdd}`, { 'bar-item--active': isActive });
  };

  if (iconDown) {
    return (
      <button
        className="bar-item"
        onClick={onClick}
      >
        <div className="bar-item__icons">
          <div className={cn('icon', {
            'icon--right': !isOpen,
            'icon--down': isOpen
          })} />
          <div className={`icon icon--${iconClass}`} />
        </div>

        {title}
      </button>
    );
  }

  return (
    <>
      {to && (
        <NavLink to={to} className={barItemClass}>
          {title}
        </NavLink>
      )}
    </>
  );
};

export default BarItem;
