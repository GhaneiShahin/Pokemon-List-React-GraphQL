import React, { Fragment } from "react";

import { Table } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Pokemon = ({ pokemons, pokemonsCar, setCurrentPage }) => {
  const mainPokemonTitle = "Main Pokemon";
  setCurrentPage(1);
  return (
    <Fragment>
      <Helmet>
        <title>{mainPokemonTitle}</title>
      </Helmet>
      <div className="container">
        <Table bordered hover className="mt-5 text-center shadow-lg">
          <thead>
            <tr>
              <th>
                <h3>#</h3>
              </th>
              <th>
                <h3>Pokemons Name</h3>
              </th>
              <th>
                <h3>Images</h3>
              </th>
            </tr>
          </thead>
          {pokemons &&
            pokemonsCar.map((pokemon) => (
              <tbody key={pokemon.id}>
                <tr>
                  <td>
                    <b>{parseInt(pokemon.number, 10)}</b>
                  </td>
                  <td>
                    <b>{pokemon.name}</b>
                  </td>
                  <td className="d-flex justify-content-center">
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={pokemon.image}
                      alt={pokemon.name}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </Fragment>
  );
};

export default Pokemon;
