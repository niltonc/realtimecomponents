"use client";

export function UP() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Unrealized performance</h2>

      <table className="w-full text-left">
        <thead className="">
          <tr>
            <th>
              <p>Name</p>
              <p className="font-normal text-xs">ISIN</p>
            </th>

            <th className="text-right">
              <p>Perf. %</p>
              <p className="font-normal text-xs">Perf.</p>
            </th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-t border-[#dedede]">
            <td className="py-2">
              <p className="truncate max-w-xs" style={{ width: "200px" }}>
                Banco Bilbao Vizcaya Argenta - Dividend Future (BA8) -
                ELA/20211217
              </p>
              <p>CD439145797</p>
            </td>

            <td className="py-2 text-right">
              <p>+0.37%</p>
              <p>5.22</p>
            </td>

            <td className="py-2 flex items-center justify-center">
              <div className="flex items-center w-50 h-4 bg-gray-200">
                <div className="h-4 bg-green-500" style={{ width: "67%" }} />
              </div>
            </td>
          </tr>

          <tr className="border-b border-t border-[#dedede]">
            <td className="py-2">
              <p className="truncate max-w-xs" style={{ width: "200px" }}>
                Vanguard Total Stock Market Index Fund
              </p>
              <p>HR700109454</p>
            </td>

            <td className="py-2 text-right">
              <p>+0.12%</p>
              <p>1.88</p>
            </td>

            <td className="py-2 flex items-center justify-center">
              <div className="flex items-center w-50 h-4 bg-gray-200">
                <div className="h-4 bg-green-500" style={{ width: "37%" }} />
              </div>
            </td>
          </tr>

          <tr className="border-b border-t border-[#dedede]">
            <td className="py-2">
              <p className="truncate max-w-xs" style={{ width: "200px" }}>
                Corn
              </p>
              <p>MN797552075</p>
            </td>

            <td className="py-2 text-right">
              <p>+0.12%</p>
              <p>1.88</p>
            </td>

            <td className="py-2 flex items-center justify-center">
              <div className="flex items-center w-50 h-4 bg-gray-200">
                <div className="h-4 bg-red-500" style={{ width: "37%" }} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
