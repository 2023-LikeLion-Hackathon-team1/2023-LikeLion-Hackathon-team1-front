import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Category from './routes/Category';
import Main from './routes/Main';
import QuestionDetail from './routes/QuestionDetail';
import WriteQuestion from './routes/WriteQuestion';
import SearchCategory from './routes/SearchCategory';
import Alarm from './routes/Alarm';
import Bookmark from './routes/Bookmark';
import Splash from './routes/Splash';
import SignUp from './routes/SignUp';
import AddName from './routes/AddName';
import MyPage from './routes/MyPage';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Center = styled.div`
  max-width: 100vw;
  min-width: 390px;
  /* height: 100vh; */
  background-color: white;
`;

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/question/:questionId">
              <QuestionDetail />
            </Route>
            <Route exact path="/category/:categoryId/write/:userId">
              <WriteQuestion />
            </Route>
            <Route exact path="/category/:categoryId/search">
              <SearchCategory />
            </Route>
            <Route exact path="/alarm">
              <Alarm />
            </Route>
            <Route exact path="/bookmark">
              <Bookmark />
            </Route>
            <Route exact path="/first">
              <Splash />
            </Route>
            <Route exact path="/first/signUp">
              <SignUp />
            </Route>
            <Route exact path="/first/signUp/addName">
              <AddName />
            </Route>
            <Route exact path="/first/signUp/addName/category">
              <Category />
            </Route>
            <Route exact path="/mypage">
              <MyPage />
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
