import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const BottomBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  height: 60px;
  color: black;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
`;

export default function MenuBar() {
  return (
    <BottomBar>
      <Link to="/">
        <HomeOutlinedIcon />
      </Link>
      <Link to="/todo">
        <BookmarkBorderOutlinedIcon />
      </Link>
      <Link to="/todo">
        <SearchOutlinedIcon />
      </Link>
      <Link to="/todo">
        <PersonOutlineOutlinedIcon />
      </Link>
    </BottomBar>
  );
}
