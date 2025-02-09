import { AppContextProvider } from './context/AppProvider';
import StoreLayout from './layouts/StoreLayout/StoreLayout';
import AppRouter from './Routes/AppRouter';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </>
  );
}

export default App;
