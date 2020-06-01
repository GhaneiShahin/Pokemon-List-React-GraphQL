import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Pokemons from "./container/Pokemons";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh/"
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Pokemons />
      </ApolloProvider>
    </>
  );
};

export default App;
