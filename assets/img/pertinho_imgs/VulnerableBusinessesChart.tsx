"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Traditional Retail", value: 2252983 },
  { name: "Construction", value: 1865625 },
  { name: "Fashion", value: 1853097 },
  { name: "Food Services", value: 1565508 },
  { name: "Beauty", value: 1248103 },
];

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

const formatTick = (value: number) => {
  if (value === 0) return "0";
  if (value === 2_000_000) return "2 Million";
  return `${(value / 1_000_000).toLocaleString("en-US", {
    maximumFractionDigits: 1,
  })}M`;
};

function CustomLabel({
  x,
  y,
  width,
  height,
  value,
  index,
}: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
}) {
  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    height === undefined ||
    value === undefined ||
    index === undefined
  ) {
    return null;
  }

  const item = data[index];

  return (
    <text
      x={x + width - 16}
      y={y + height / 2}
      textAnchor="end"
      dominantBaseline="middle"
      fill="white"
      fontSize={16}
    >
      <tspan fontWeight="700">{item.name}</tspan>
      <tspan fontWeight="400"> {formatNumber(value)}</tspan>
    </text>
  );
}

export function VulnerableBusinessesChart() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-lg border border-default-200 bg-background p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          {/* Context */}
          <div>
            <h2 className="text-[25px] font-light leading-tight  text-foreground ">
              We knew that{" "}
              <span>
                small and micro businesses
              </span>{" "}
              were among the businesses most affected by the COVID-19 crisis.
            </h2>
          </div>

          {/* Chart */}
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-medium text-default-500 md:text-base">
              Number of small businesses in the segments most vulnerable to the
              crisis
            </h3>

            <div className="h-95 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 0, right: 16, bottom: 8, left: 0 }}
                >
                  <CartesianGrid
                    horizontal={false}
                    stroke="currentColor"
                    className="text-default-200"
                  />

                  <XAxis
                    type="number"
                    domain={[0, 2_000_000]}
                    ticks={[0, 500_000, 1_000_000, 1_500_000, 2_000_000]}
                    tickFormatter={formatTick}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "currentColor", fontSize: 13 }}
                    className="text-default-500"
                  />

                  <YAxis
                    type="category"
                    dataKey="name"
                    hide
                    axisLine={false}
                    tickLine={false}
                  />

                  <Bar
                    dataKey="value"
                    fill="currentColor"
                    className="text-warning"
                    radius={0}
                    isAnimationActive={false}
                  >
                    <LabelList
                      dataKey="value"
                      content={<CustomLabel />}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}