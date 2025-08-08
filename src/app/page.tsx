import { PortfolioSummary } from "@/components/header";
import { PortfolioValueChart } from "@/components/line-chart";
import { Performance } from "@/components/unrealized";

export default function Home() {
  return (
    <div className=" p-30">
      <PortfolioSummary />

      <div className="mt-10" />
      <div className="flex gap-6">
        <div className="w-1/2">
          <Performance />
        </div>

        <div className="w-1/2">
          <PortfolioValueChart />
        </div>
      </div>
    </div>
  );
}
