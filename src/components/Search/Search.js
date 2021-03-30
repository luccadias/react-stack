import React from "react";

import { Input, Container, Icon } from "./styled";

import PropTypes from "prop-types";

const Search = ({ value, onChange, onClick }) => {
  return (
    <Container>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Insira aqui o nome da cidade"
      />
      <Icon onClick={() => onClick()} size={20} />
    </Container>
  );
};

Search.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Search;
