import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './Routes/AppRouter';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
