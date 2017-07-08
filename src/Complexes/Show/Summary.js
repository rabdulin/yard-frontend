import React from "react";
import SumItem from "./SumItem";

export default () => {
  return (
    <section className="complex-summary">
      <SumItem value="950" label="предложений" />
      <SumItem value="John McAslan + Partners" label="архитектор" />
      <SumItem value="Группа «ПСН»" label="застройщик" />
    </section>
  );
};
