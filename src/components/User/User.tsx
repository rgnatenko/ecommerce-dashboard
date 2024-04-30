import React from 'react';
import { Checkbox } from '@mui/material';
import UserType from '../../types/User';

type Props = {
  user: UserType,
  classToAdd?: string
}

const UserItem: React.FC<Props> = ({ user, classToAdd }) => {
  return (
    <div className={`user ${classToAdd}`}>
      <Checkbox
        sx={{
          color: '#CBD0DD',
          '&.Mui-checked': {
            color: '#2AABEE',
          },
        }}
      />

      <div className="user__name-block">
        {user.name && (
          <div className="user__avatar">
            {user?.name[0]}
          </div>
        )}

        <p className="user__name">{user.name}</p>
      </div>

      <p className="text-body user__reason">{user.reason}</p>

      <p className="user__status">{user.status}</p>

      <p className="user__time">{user.time}</p>
    </div>
  );
};

export default UserItem;
