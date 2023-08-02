import { ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import { useParams } from 'react-router';
// import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <RecoilRoot> */}
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
        {/* </RecoilRoot> */}
        {/* </ThemeProvider> */}
      </QueryClientProvider>
    </>
  );
}
export default App;
