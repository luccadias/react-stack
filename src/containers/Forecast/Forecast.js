import React, { useState } from "react";

import { Text, Table, Card } from "../../components/index";

import { Container, SearchInput, Block } from "./styled";

export default function Forecast() {
  const [city, setCity] = useState("");

  return (
    <Container>
      <Text> Previsão do Tempo</Text>
      <Card />
      <SearchInput
        value={city}
        onChange={setCity}
        onClick={() => console.log(city)}
      />
      <Block>
        <Table
          columns={["Min", "Max", ""]}
          rows={[{ min: 20, max: 30, name: "sao paulo" }, { min: 20, max: 30, name: "sao paulo" },{ min: 20, max: 30, name: "sao paulo" }]}
          keys={["min", "max", "name"]}
        />
        <Table
          columns={["Min", "Max", ""]}
          rows={[{ min: 20, max: 30, name: "sao paulo" }]}
          keys={["min", "max", "name"]}
        />
      </Block>
    </Container>
  );
}
