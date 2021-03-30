import React from "react";

import {
  Container,
  Head,
  Icon,
  Text,
  Body,
  Row,
  ArrowUp,
  ArrowDown,
} from "./styled";

export default function Card({ onClick }) {
  return (
    <Container>
      <Head>
        <Text size={13}>Niterói, RJ - Brasil</Text>
        <Icon onClick={() => onClick()} size={20} />
      </Head>
      <Body>
        <Text size={30}>20C Nublado</Text>
        <Row margin={"10px 0"}>
          <Row>
            <ArrowUp />
            <Text size={12}> 29C </Text>
            <ArrowDown />
            <Text size={12}> 29C </Text>
          </Row>

          <Text size={12}>Sensação: 35C</Text>
        </Row>

        <Row margin={"10px 0"}>
          <Text size={12}> Vento: 18km/h </Text>
          <Text size={12}>Umidade: 89%</Text>
        </Row>

        <Row>
          <DayForecast data={{ min: "15C", max: "25C", day: "Terça" }} />
          <DayForecast data={{ min: "15C", max: "25C", day: "Terça" }} />
          <DayForecast data={{ min: "15C", max: "25C", day: "Terça" }} />
          <DayForecast data={{ min: "15C", max: "25C", day: "Terça" }} />
        </Row>
      </Body>
    </Container>
  );
}

const DayForecast = ({ data }) => (
  <div>
    <Text size={15}>{data.day}</Text>
    <Row>
      <Text color="#FF8D28" size={12}>{data.min}</Text>
      <Text color="#FF8D28"  size={12}>{data.max}</Text>
    </Row>
  </div>
);
