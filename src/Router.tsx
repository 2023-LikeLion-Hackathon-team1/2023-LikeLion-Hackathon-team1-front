import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Category from './routes/Category';
import Main from './routes/Main';
import QuestionDetail from './routes/QuestionDetail';

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
            <Route exact path="/category">
              <Category />
            </Route>
            <Route exact path="/:categoryId/:questionId">
              <QuestionDetail />
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
