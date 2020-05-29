import React, { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/client";

import Header from "../component/Header/Header";
import Pokemon from "../component/Pokemon/Pokemon";
import ReversePokemon from "../component/ReversePokemon/ReversePokemon";

const Pokemons = () => {
  const [perPage] = useState(5);

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 20 }
  });

  return (
    <Fragment>
      <Header
        appTitle="Pokemon List, made with React, GraphQL"
        poks={pokemons.length}
      />
      <Switch>
        <Route
          path="/Pokemon-List-React-GraphQL/reverseList"
          render={(routeProps) => (
            <ReversePokemon
              {...routeProps}
              pokemons={pokemons}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/Pokemon-List-React-GraphQL/"
          exact
          render={(routeProps) => (
            <Pokemon {...routeProps} pokemons={pokemons} perPage={perPage} />
          )}
        />
      </Switch>
    </Fragment>
  );
};

export default Pokemons;
