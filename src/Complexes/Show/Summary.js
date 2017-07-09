import React from "react";
import SumItem from "./SumItem";
import styled from 'styled-components';

const Summary = styled.section`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default () => {
  return (
    <Summary>
      <SumItem value="950" label="предложений" />
      <SumItem value="John McAslan + Partners" label="архитектор" />
      <SumItem value="Группа «ПСН»" label="застройщик" />
    </Summary>
  );
};
