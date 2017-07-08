import React from "react";
import Sum from "./Sum";

export default () => {
  return (
    <section className="complex-summary">
      <Sum value="950" label="предложений" />
      <Sum value="John McAslan + Partners" label="архитектор" />
      <Sum value="Группа «ПСН»" label="застройщик" />
    </section>
  );
};
