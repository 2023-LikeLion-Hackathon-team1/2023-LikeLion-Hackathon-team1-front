import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import theme from '../theme';

const BottomBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: start;
  justify-items: center;
  position: fixed;
  bottom: 0;
  min-width: 100%;
  height: 50px;
  color: black;
  padding: 10px;
  background-color: white;
  /* background-color: rgba(255, 255, 255, 0.8); */
`;

const StyledLink = styled(Link)<{ active: boolean }>`
  color: ${(props) => (props.active ? theme.palette.color.main : 'lightgray')};
`;

const Block = styled.p`
  display: flex;
  height: 50px;
  background-color: white;
`;

export default function MenuBar() {
  const [activeIcon, setActiveIcon] = useState<string>('home');

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <Block />
      <BottomBar>
        <StyledLink to="/" active={activeIcon === 'home'} onClick={() => handleIconClick('home')}>
          <HomeOutlinedIcon />
        </StyledLink>
        <StyledLink to="/bookmark" active={activeIcon === 'bookmark'} onClick={() => handleIconClick('bookmark')}>
          <BookmarkBorderOutlinedIcon />
        </StyledLink>
        <StyledLink
          to="/category/:categoryId/search"
          active={activeIcon === 'search'}
          onClick={() => handleIconClick('search')}
        >
          <SearchOutlinedIcon />
        </StyledLink>
        <StyledLink to="/profile" active={activeIcon === 'profile'} onClick={() => handleIconClick('profile')}>
          <PersonOutlineOutlinedIcon />
        </StyledLink>
      </BottomBar>
    </>
  );
}
