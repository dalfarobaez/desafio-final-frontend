import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthContextProvider } from './context/AuthProvider';
import AppRouter from './Routes/AppRouter';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AuthContextProvider>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
