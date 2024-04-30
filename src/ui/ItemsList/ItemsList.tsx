/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { data } from '../../data';
import TableTop from '../TableTop/TableTop';
import RegionType from '../../types/Region';
import UserType from '../../types/User';
import UserItem from '../../components/User/User';
import Region from '../../components/Region/Region';

type Props = {
  items: any,
  classToAdd?: string,
  listType: 'users' | 'regions'
}

const ItemsList: React.FC<Props> = ({ items, classToAdd, listType }) => {
  const {
    reviewsTableTopSections,
    usersTableTopSections,
    usersTotalSumSections
  } = data;

  if (listType === 'users') {
    return (
      <div className={`list ${classToAdd}`}>
        <TableTop
          sections={reviewsTableTopSections}
          checkboxNeeded
          tableClassToAdd="list__table-top"
        />

        {items.map((user: UserType, i: number) => (
          <UserItem
            classToAdd="list__review"
            key={i}
            user={user}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`list ${classToAdd}`}>
      <TableTop
        sections={usersTableTopSections}
        tableClassToAdd="regions-by-revenue__table-top"
      />

      <TableTop
        sections={usersTotalSumSections}
        tableClassToAdd="regions-by-revenue__table-top"
      />

      {items.map((region: RegionType, i: number) => (
        <Region key={i} region={region} index={i + 1} />
      ))}
    </div>
  );
};

export default ItemsList;
