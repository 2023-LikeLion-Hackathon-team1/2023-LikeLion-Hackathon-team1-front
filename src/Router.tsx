import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
`;

const Center = styled.div`
  min-width: 390px;
  height: 100vh;
  background-color: white;
`;

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <div> Hello </div>
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
