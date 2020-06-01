import React, { Fragment, useState } from "react";

import { Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Pagination from "../../Pagination/Pagination";
import { paginate } from "../../Pagination/paginate";

const ReversePokemon = ({ pokemons, perPage }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pokemonCharacters = paginate(pokemons, currentPage, perPage);

  const reversePokemonTitle = "Reverse Pokémon";
  return (
    <Fragment>
      <Helmet>
        <title>{reversePokemonTitle}</title>
      </Helmet>
      <div className="container">
        <Table size="sm" responsive bordered hover className="mt-5 text-center">
          <thead className="text-info">
            <tr>
              <th>
                <h4>#</h4>
              </th>
              <th>
                <h4>Types</h4>
              </th>
              <th>
                <h4>Name</h4>
              </th>
              <th>
                <h4>Images</h4>
              </th>
            </tr>
          </thead>
          {pokemonCharacters.reverse().map((pokemon) => (
            <tbody key={pokemon.id}>
              <tr>
                <td>
                  <b className="text-danger">{parseInt(pokemon.number, 10)}</b>
                </td>
                <td>
                  <b className="text-dark">{pokemon.classification}</b>
                </td>
                <td>
                  <b className="text-dark">{pokemon.name}</b>
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
        <Pagination
          totalPros={pokemons.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};

export default ReversePokemon;
