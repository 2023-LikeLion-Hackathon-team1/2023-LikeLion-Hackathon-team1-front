import { styled } from 'styled-components';
import logo from '../imgs/logoQuery.png';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  background-color: white;
`;

const Logo = styled.img`
  width: 60px;
`;

export default function Header() {
  return (
    <>
      <TopHeader>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Link to="/alarm">
          <NotificationsNoneOutlinedIcon />
        </Link>
      </TopHeader>
    </>
  );
}
