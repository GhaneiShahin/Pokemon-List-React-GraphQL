import React from "react";
import { Link } from "react-router-dom";

import { Alert, Badge } from "react-bootstrap";

const Header = (props) => {
  return (
    <Alert variant="info" className="text-center">
      <Alert.Heading>
        {props.appTitle} and <span className="fa fa-heart text-danger" />
      </Alert.Heading>
      <hr />
      <h5>
        There are
        <Badge pill variant="primary" className="mr-1 ml-1">
          {props.poks}
        </Badge>
        Pokémon
      </h5>
      <div className="d-flex justify-content-around">
        <Link to="/Pokemon-List-React-GraphQL">Main Table</Link>
        <Link to="/Pokemon-List-React-GraphQL/reverseList">Reverse Table</Link>
      </div>
    </Alert>
  );
};

export default Header;
