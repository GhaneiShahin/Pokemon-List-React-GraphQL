import React, { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/client";

import Header from "../component/Header/Header";
import Pokemon from "../component/Pokemon/Pokemon";
import ReversePokemon from "../component/ReversePokemon/ReversePokemon";
import { Spinner } from "react-bootstrap";

const Pokemons = () => {
  const [perPage] = useState(31);

  const { loading, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 }
  });

  if (loading) {
    return (
      <div
        style={{ height: "500px" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <Fragment>
      <Header
        appTitle="Pokémon List, made with React, GraphQL"
        poks={pokemons.length}
      />
      <Switch>
        <Route
          path="/reverseList"
          render={(routeProps) => (
            <ReversePokemon
              {...routeProps}
              pokemons={pokemons}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/"
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
