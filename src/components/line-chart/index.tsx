"use client";

import { useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "1/2016", value: 5650 },
  { date: "1/2017", value: 5760 },
  { date: "1/2018", value: 5820 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
  { date: "1/2017", value: 5760 },
  { date: "1/2018", value: 5820 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
  { date: "1/2017", value: 5760 },
  { date: "1/2018", value: 5820 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
  { date: "1/2017", value: 5760 },
  { date: "1/2018", value: 5820 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
  { date: "1/2019", value: 5610 },
  { date: "1/2020", value: 5630 },
  { date: "1/2021", value: 5580 },
  { date: "1/2022", value: 5620 },
  { date: "1/2023", value: 5650 },
  { date: "1/2024", value: 5690 },
  { date: "1/2025", value: 5700 },
];

export function PortfolioValueChart() {
  const [selected, setSelected] = useState("3M");
  const options = ["3M", "1Y", "Max"];

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Portfolio value</h3>

        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 border border-gray-300">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200
            ${
              selected === option
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 hover:text-black"
            }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="right"
              domain={[5580, 5820]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="value"
              stroke="#2193fd"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
