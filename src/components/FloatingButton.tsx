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

// const CustomFab = styled(Fab)`
//   background-color: ${theme.palette.green.darkgreen};
// `;

export default function FloatingButton() {
  return (
    <>
      <Float>
        <Fab
          aria-label="add"
          sx={{
            backgroundColor: theme.palette.green.darkgreen,
            color: 'white',
          }}
        >
          <Add style={{ color: 'white' }} />
        </Fab>
      </Float>
    </>
  );
}
