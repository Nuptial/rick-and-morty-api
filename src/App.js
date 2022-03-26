import Listing from "./Pages/Listing";
import Detail from "./Pages/Detail";
import NotFound from './Pages/NotFound';
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

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
