import { styled } from 'styled-components';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const Header = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 10px;
`;

export default function SubHeader({ title }: { title: string }) {
  return (
    <Header>
      <ArrowBackIosNewRoundedIcon />
      {title}
      <div />
    </Header>
  );
}
