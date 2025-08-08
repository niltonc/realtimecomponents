"use client";

export function PortfolioSummary() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex-1 max-w-[420px]">
          <p className="font-bold text-lg md:text-xl">Portfolio value in JPY</p>
          <p className="font-bold text-3xl md:text-5xl">408.47</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Total perf.</p>
          <p>+529.69</p>
          <p>-48.90%</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Purchase value</p>
          <p>+529.69</p>
          <p>-48.90%</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Positions</p>
          <p>32.44</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold">Last calc.</p>
          <p>8/04/25</p>
          <p className="text-[#687073] text-sm">11:28:53 AM</p>
        </div>
      </div>

      <div className="bg-[#f3f5f5] border-t border-[#dedede] p-4">
        <p className="text-[#687073] text-sm">Realized profits </p>
      </div>
    </div>
  );
}
