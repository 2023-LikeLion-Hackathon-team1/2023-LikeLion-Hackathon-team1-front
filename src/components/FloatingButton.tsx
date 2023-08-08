import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { styled } from 'styled-components';

const Float = styled.div`
  position: fixed;
  bottom: 10%;
  right: 20px;
  z-index: 100;
`;

// Define your custom gray color here
const CustomFab = styled(Fab)`
  background-color: gray;
  /* Add any additional styling you need */
`;

export default function FloatingButton() {
  return (
    <>
      <Float>
        <CustomFab aria-label="add">
          <Add style={{ color: 'white' }} />
        </CustomFab>
      </Float>
    </>
  );
}
