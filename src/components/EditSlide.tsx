import * as React from 'react';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { HiOutlinePencil } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import { styled } from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border: none;
  &:hover {
    color: ${theme.palette.color.main}; /* Change color on hover */
  }
  &:active {
    color: ${theme.palette.color.main};
  }
`;

export default function EditSlide() {
  const [state, setState] = useState<{ [key: string]: boolean }>({ bottom: false });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>) => {
      if (event.type === 'keydown') {
        const keyboardEvent = event as React.KeyboardEvent<Element>;
        if (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift') {
          return;
        }
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          width: '80vw',
          height: '200px',
          borderRadius: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <Button>
          <HiOutlinePencil /> 이름 변경하기
        </Button>
        <Button>
          <HiOutlineTrash /> 삭제
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <MoreHorizIcon style={{ color: theme.palette.color.main }} />
          </div>
          <SwipeableDrawer
            anchor={anchor as 'bottom'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
