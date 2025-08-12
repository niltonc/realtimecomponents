import { ChartTable } from "@/components/chart-table";
import { HeaderSummary } from "@/components/header";
import { PieChart } from "@/components/pie-chart";
import { TablePerformance } from "@/components/table-performance";

import {
  AssetClassPercentages,
  colors,
  headerData,
  PieChartData,
  UnPerformanceData,
} from "@/mock";
import { PortfolioValueChart } from "@/components/line-chart";
import { TransactionsTable } from "@/components/table-transactions";
// Update the import path below if your Tabs components are located elsewhere
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PositionTable } from "@/components/table-positions";

export default function Home() {
  return (
    <div className="p-30">
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

      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="positions">Positions</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="flex gap-6">
     
            <div className="w-full">
              <div className="flex gap-6">

        <div className="w-1/2">
          <TablePerformance.Root title="Unrealized Performance">
            {UnPerformanceData.map((item) => (
              <TablePerformance.Body
                key={item.code}
                name={item.name}
                code={item.code}
                percent={item.percent}
                value={item.value}
              />
            ))}
          </TablePerformance.Root>
        </div>

         <div className="w-1/2">
          <PortfolioValueChart />
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold mb-4">Breakdown information</h2>

      <div className="flex gap-6">
        <div className="w-1/2 flex flex-col gap-4">
          <PieChart
            number="7"
            colors={colors}
            data={PieChartData}
            title="Asset classes"
            subtitle="Diversification"
          />

          <ChartTable.Root columnOne="Weight %" columnTwo="Asset class">
            {AssetClassPercentages.map((item) => (
              <ChartTable.Body
                key={item.name}
                columnOne={item.percent}
                columnTwo={item.name}
                colors={`bg-green-500`}
              />
            ))}
          </ChartTable.Root>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <PieChart
            number="5"
            colors={colors}
            title="Currencies"
            data={PieChartData}
            subtitle="Currencies"
          />

          <ChartTable.Root columnOne="Weight %" columnTwo="Asset class">
            {AssetClassPercentages.map((item) => (
              <ChartTable.Body
                key={item.name}
                columnOne={item.percent}
                columnTwo={item.name}
                colors={`bg-green-500`}
              />
            ))}
          </ChartTable.Root>
        </div>
      </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="positions">
          <div className="w-full mt-4">
            <PositionTable />
          </div>
        </TabsContent>

        <TabsContent value="transactions">
          <div className="w-full mt-4">
            <TransactionsTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}