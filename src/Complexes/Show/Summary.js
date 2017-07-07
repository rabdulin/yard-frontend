import React from "react";
import SummaryProps from "./SummaryProps";

export default () => {
  return (
    <section className="complex-summary">
      <SummaryProps value="950" label="предложений" />
      <SummaryProps value="John McAslan + Partners" label="архитектор" />
      <SummaryProps value="Группа «ПСН»" label="застройщик" />
    </section>
  );
};
