import { HeaderSummary } from "@/components/header";
import { PortfolioValueChart } from "@/components/line-chart";
import { UnrealizedPerformance } from "@/components/unrealized-performance";

import { headerData, UnPerformanceData } from "@/mock";

export default function Home() {
  return (
    <div className=" p-30">
      <HeaderSummary
        currency={headerData.currency}
        value={headerData.value}
        position={headerData.position}
        todayChangeValue={headerData.todayChangeValue}
        todayChangePercent={headerData.todayChangePercent}
        totalPerfPercent={headerData.totalPerfPercent}
        totalPerfValue={headerData.totalPerfValue}
        purchaseValue={headerData.purchaseValue}
        date={headerData.date}
        hour={headerData.hour}
        realizedProfitsValue={headerData.realizedProfitsValue}
        realizedProfitsPercent={headerData.realizedProfitsPercent}
        unrealizedPerfValue={headerData.unrealizedPerfValue}
        unrealizedPerfPercent={headerData.unrealizedPerfPercent}
      />

      <div className="mt-10" />

      <div className="flex gap-6">
        <div className="w-1/2">
          <UnrealizedPerformance.Root title="Unrealized Performance">
            {UnPerformanceData.map((item) => (
              <UnrealizedPerformance.Body
                key={item.code}
                name={item.name}
                code={item.code}
                percent={item.percent}
                value={item.value}
              />
            ))}
          </UnrealizedPerformance.Root>
        </div>

        <div className="w-1/2">
          <PortfolioValueChart />
        </div>
      </div>
    </div>
  );
}
