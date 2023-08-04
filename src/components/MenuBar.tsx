import React, { useState } from 'react';
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
  align-items: start;
  justify-items: center;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  height: 70px;
  color: black;
  padding: 10px;
  background-color: white;
`;

const StyledLink = styled(Link)<{ active: boolean }>`
  color: ${(props) => (props.active ? 'black' : 'lightgray')};
`;

export default function MenuBar() {
  const [activeIcon, setActiveIcon] = useState<string>('home');

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <BottomBar>
        <StyledLink to="/" active={activeIcon === 'home'} onClick={() => handleIconClick('home')}>
          <HomeOutlinedIcon />
        </StyledLink>
        <StyledLink to="/todo" active={activeIcon === 'bookmark'} onClick={() => handleIconClick('bookmark')}>
          <BookmarkBorderOutlinedIcon />
        </StyledLink>
        <StyledLink to="/search" active={activeIcon === 'search'} onClick={() => handleIconClick('search')}>
          <SearchOutlinedIcon />
        </StyledLink>
        <StyledLink to="/profile" active={activeIcon === 'profile'} onClick={() => handleIconClick('profile')}>
          <PersonOutlineOutlinedIcon />
        </StyledLink>
      </BottomBar>
    </>
  );
}
