import Listing from "./containers/Listing";
import Detail from "./containers/Detail";
import NotFound from './containers/NotFound';
import { ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { client } from './api/services/RickAndMorty';

const theme = createTheme({
  palette: {
    primary: {
      main: "#379683",
    },
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/character/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
