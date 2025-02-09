import { HelmetProvider } from "react-helmet-async";
import { AppContextProvider } from "./context/AppProvider";
import StoreLayout from "./layouts/StoreLayout/StoreLayout";
import AppRouter from "./Routes/AppRouter";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <AppContextProvider>
          <AppRouter />
        </AppContextProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
