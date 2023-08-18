// eslint-disable-next-line no-unused-vars
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { IsLoginState, MemberIdState } from '../store/atom';
import axios from 'axios';

export default function GoogleButton() {
  // eslint-disable-next-line no-unused-vars
  const [Login, setLogin] = useRecoilState(IsLoginState);
  // eslint-disable-next-line no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  // setLogin(true);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/members/google-login`, {
        googleAccountId: decodedToken.email, // Google 계정 ID
        imgUrl: decodedToken.picture, // 유저 이미지 URL
        code: decodedToken.sub, // Google OAuth 코드
      });

      if (response.status === 200) {
        const memberId = response.data.memberId; // memberId 받아오기

        console.log('Member ID:', memberId);
        setLogin(true);
        setMemberId(memberId);
        history.push('/first/signUp/addName');
        // memberId를 다음 단계로 넘기거나 원하는 대로 활용할 수 있습니다.
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(error)}
        useOneTap
      />
    </>
  );
}
