import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { styled } from 'styled-components';
import theme from '../theme';

const Float = styled.div`
  position: fixed;
  bottom: 10%;
  right: 20px;
  z-index: 100;
`;

export default function FloatingButton() {
  return (
    <>
      <Float>
        <Fab
          aria-label="add"
          sx={{
            backgroundColor: theme.palette.color.green2,
            color: 'white',
          }}
        >
          <Add style={{ color: 'white' }} />
        </Fab>
      </Float>
    </>
  );
}
