import React from 'react';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Input } from '@mui/joy';

const Navbar: React.FC = () => {
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
          <div className="icon icon--notification"></div>
        </IconButton>
        <IconButton>
          <div className="icon icon--menu"></div>
        </IconButton>
        <IconButton>
          <div className="icon icon--user"></div>
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
