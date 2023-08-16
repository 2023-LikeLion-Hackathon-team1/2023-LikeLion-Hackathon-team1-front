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

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);

    try {
      const response = await axios.post('http://localhost:8080/members/google-login', {
        googleAccountId: decodedToken.googleAccountId, // Google 계정 ID
        imgUrl: decodedToken.imgUrl, // 유저 이미지 URL
        code: decodedToken.code, // Google OAuth 코드
      });

      if (response.data.isRegistered === true) {
        localStorage.setItem('accessToken', response.data.tokens.accessToken);
        localStorage.setItem('refreshToken', response.data.tokens.refreshToken);

        history.push('/');
        setLogin(true);
        setMemberId(response.data.memberId);
      } else {
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
