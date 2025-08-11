"use client";

import { Chart } from "react-google-charts";

type PieChartProps = {
  title?: string;
  subtitle?: string;
  number?: string;
  data?: unknown[];
  colors?: string[];
};

export function PieChart({
  title,
  subtitle,
  number,
  data,
  colors,
}: PieChartProps) {
  const options = {
    legend: "none",
    pieSliceText: "none",
    colors: colors,
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"350px"}
        />
        <div className="flex justify-around w-full">
          <span className="text-[#687073]">{subtitle}</span>
          <span className="text-[#282C2E]">{number}</span>
        </div>
      </div>
    </div>
  );
}
