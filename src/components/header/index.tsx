"use client";

type HeaderSummaryProps = {
  currency?: string;
  value?: number | string;
  todayChangeValue?: string;
  todayChangePercent?: string;
  totalPerfValue?: string;
  totalPerfPercent?: string;
  purchaseValue?: string;
  position?: number;
  date?: string;
  hour?: string;
  realizedProfitsValue?: string;
  realizedProfitsPercent?: string;
  unrealizedPerfValue?: string;
  unrealizedPerfPercent?: string;
};

export function HeaderSummary({
  currency,
  value,
  position,
  todayChangeValue,
  todayChangePercent,
  totalPerfValue,
  totalPerfPercent,
  purchaseValue,
  date,
  hour,
  realizedProfitsValue,
  realizedProfitsPercent,
  unrealizedPerfValue,
  unrealizedPerfPercent,
}: HeaderSummaryProps) {
  const getColorClass = (value?: string) =>
    value?.startsWith("-") ? "text-[#DD000F]" : "text-[#008100]";

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex-1 max-w-[420px]">
          <p className="font-bold text-lg md:text-xl">
            Portfolio value in {currency}
          </p>
          <p className="font-bold text-3xl md:text-5xl">{value}</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Total change</p>
          <p className={`text-sm ${getColorClass(todayChangeValue)}`}>
            {todayChangeValue}
          </p>
          <p className={`text-sm ${getColorClass(todayChangePercent)}`}>
            {todayChangePercent}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Total perf.</p>
          <p className={`text-sm ${getColorClass(totalPerfValue)}`}>
            {totalPerfValue}
          </p>
          <p className={`text-sm ${getColorClass(totalPerfPercent)}`}>
            {totalPerfPercent}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Purchase value</p>
          <p className="text-sm">{purchaseValue}</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Positions</p>
          <p className="text-sm">{position}</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Last calc.</p>
          <p className="text-sm">{date}</p>
          <p className="text-[#687073] text-sm">{hour}</p>
        </div>
      </div>

      <div className="bg-[#f3f5f5] border-t border-[#dedede] p-3 text-sm flex gap-4">
        <div className="flex gap-2 items-center">
          <p className="text-[#687073]">Realized profits </p>
          <p>{realizedProfitsValue}</p> |{" "}
          <p className={getColorClass(realizedProfitsPercent)}>
            {realizedProfitsPercent}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-[#687073]">Unrealized perf.</p>
          <p>{unrealizedPerfValue}</p> |
          <p className={getColorClass(unrealizedPerfPercent)}>
            {unrealizedPerfPercent}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-[#687073]">Base currency</p>
          <p>{currency}</p>
        </div>
      </div>
    </div>
  );
}
