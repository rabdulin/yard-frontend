import React from "react";
import Sum from "./Sum";
import styled from 'styled-components';

const Summary = styled.section`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default () => {
  return (
    <Summary>
      <Sum value="950" label="предложений" />
      <Sum value="John McAslan + Partners" label="архитектор" />
      <Sum value="Группа «ПСН»" label="застройщик" />
    </Summary>
  );
};
