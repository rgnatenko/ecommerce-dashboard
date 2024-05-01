import React, { useState } from 'react';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Input } from '@mui/joy';

const Navbar: React.FC = () => {
  const [notificationsAreOpened, setNotificationsAreOpened] = useState(false);
  const [cleared, setCleared] = useState<string[]>([]);

  return (
    <div className={cn('navbar')}>
      <Link to="">
        <img
          src="logo.svg"
          alt=""
          className='navbar__logo'
        />
      </Link>

      <Input
        startDecorator={<div className="icon icon--search" />}
        className="input navbar__search"
        sx={{
          borderRadius: '40px',
        }}
        placeholder='Search'
      />

      <div className="navbar__main">
        <IconButton>
          <div
            onClick={() => setNotificationsAreOpened(!notificationsAreOpened)}
            className="icon icon--notification"
          />
        </IconButton>
        <IconButton>
          <div className="icon icon--menu"></div>
        </IconButton>
        <IconButton>
          <div className="icon icon--user"></div>
        </IconButton>
      </div>

      {notificationsAreOpened && (
        <div className='navbar__notification-list notification-list'>
          <div className="notification-list__top">
            <h5>Channel Notifications</h5>
            <button onClick={() => setNotificationsAreOpened(false)} className="icon icon--x" />
          </div>

          {!cleared.includes('id1') && (
            <div className='notification-list__notification notification notification--successfull'>
              <div className="">
                <div className="icon icon--done" />
                <p className="notification__message">
                  @vadymDykiy has joined your channel
                </p>
              </div>

              <div
                className="icon icon--x"
                onClick={() => setCleared([...cleared, 'id1'])}
              />
            </div>
          )}

          {!cleared.includes('id2') && (
            <div className='notification-list__notification notification notification--danger'>
              <div className="">
                <div className="icon icon--danger" />
                <p className="notification__message">
                  @richardDawkins was blocked
                </p>
              </div>

              <div
                className="icon icon--x"
                onClick={() => setCleared([...cleared, 'id2'])}
              />
            </div>
          )}

          {cleared.length === 2 && <p>No notificatios</p>}

          {cleared.length !== 2 && (
            <button
              className='notification-list__clear-btn'
              onClick={() => setCleared(['id1', 'id2'])}
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
