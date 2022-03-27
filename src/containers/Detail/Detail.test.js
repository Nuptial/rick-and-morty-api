import renderer from "react-test-renderer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Detail from "../Detail";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

it("renders correctly when there are no items", () => {
  const tree = renderer
    .create(
      <ApolloProvider client={client}>
        <Detail />
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
