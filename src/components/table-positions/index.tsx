"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Row = {
  name: string;
  isin: string;
  quantity: string;
  avgBuyPrice: string;
  lastPrice: string;
  lastPriceCurrency: string;
  lastPriceDate: string;
  todayChgPercent: string;
  todayChgValue: string;
  unrealizedPerfPercent: string;
  unrealizedPerfValue: string;
  marketValue: string;
  purchaseValue: string;
  weight: string;
};

const data: Row[] = [
  {
    name: "Santander Sterling...",
    isin: "WF740253839",
    quantity: "2,154",
    avgBuyPrice: "223.50 GBP",
    lastPrice: "4,641.99",
    lastPriceCurrency: "AUD",
    lastPriceDate: "8/12/2025, 11:39:14 AM",
    todayChgPercent: "+96.60%",
    todayChgValue: "511.22",
    unrealizedPerfPercent: "+35.30%",
    unrealizedPerfValue: "312.90",
    marketValue: "4,681.15 GBP",
    purchaseValue: "3,705.79 GBP",
    weight: "327,301.00%",
  },
  {
    name: "Hong Kong Dollar",
    isin: "BA232132353",
    quantity: "6,342",
    avgBuyPrice: "530.21 GBP",
    lastPrice: "3,726.2600",
    lastPriceCurrency: "JPY",
    lastPriceDate: "8/12/2025, 11:39:14 AM",
    todayChgPercent: "+62.1000%",
    todayChgValue: "459.7130",
    unrealizedPerfPercent: "+58.6000%",
    unrealizedPerfValue: "562.7130",
    marketValue: "4,633.08 GBP",
    purchaseValue: "5,434.05 GBP",
    weight: "208,608.0000%",
  },
  {
    name: "Intesa Sanpaolo S...",
    isin: "MC663621855",
    quantity: "3,505",
    avgBuyPrice: "461.11 GBP",
    lastPrice: "3,549.22",
    lastPriceCurrency: "AUD",
    lastPriceDate: "8/12/2025, 11:39:14 AM",
    todayChgPercent: "+14.40%",
    todayChgValue: "872.57",
    unrealizedPerfPercent: "+70.50%",
    unrealizedPerfValue: "624.27",
    marketValue: "2,052.38 GBP",
    purchaseValue: "4,088.05 GBP",
    weight: "154,991.00%",
  },
  {
    name: "DJ Industrial Aver...",
    isin: "IR749184388",
    quantity: "1,637",
    avgBuyPrice: "253.33 GBP",
    lastPrice: "6,828.06",
    lastPriceCurrency: "AUD",
    lastPriceDate: "8/12/2025, 11:39:14 AM",
    todayChgPercent: "-75.80%",
    todayChgValue: "585.54",
    unrealizedPerfPercent: "-49.90%",
    unrealizedPerfValue: "955.46",
    marketValue: "3,665.14 GBP",
    purchaseValue: "8,365.98 GBP",
    weight: "936,755.00%",
  },
  {
    name: "AEX Futures Jul21...",
    isin: "PM987893582",
    quantity: "2,805",
    avgBuyPrice: "456.60 GBP",
    lastPrice: "6,789.12",
    lastPriceCurrency: "GBP",
    lastPriceDate: "8/12/2025, 11:39:14 AM",
    todayChgPercent: "+81.20%",
    todayChgValue: "590.78",
    unrealizedPerfPercent: "+95.90%",
    unrealizedPerfValue: "342.25",
    marketValue: "3,362.28 GBP",
    purchaseValue: "8,348.85 GBP",
    weight: "583,510.00%",
  },
];

export function PositionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name<br /><span className="font-normal text-xs">ISIN</span></TableHead>
          <TableHead>Quantity/Nominal<br /><span className="font-normal text-xs">Avg. buy price</span></TableHead>
          <TableHead>Last price<br /><span className="font-normal text-xs">Time/Date</span></TableHead>
          <TableHead>Today chg.</TableHead>
          <TableHead>Unrealized perf.</TableHead>
          <TableHead>Market value<br /><span className="font-normal text-xs">Purchase value</span></TableHead>
          <TableHead>Weight %</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={row.isin} className={i === 0 ? "bg-muted" : ""}>
            <TableCell>
              {row.name}
              <br />
              <span className="text-xs text-muted-foreground">{row.isin}</span>
            </TableCell>
            <TableCell>
              {row.quantity}
              <br />
              <span className="text-xs text-muted-foreground">{row.avgBuyPrice}</span>
            </TableCell>
            <TableCell>
              {row.lastPrice} {row.lastPriceCurrency}
              <br />
              <span className="text-xs text-muted-foreground">{row.lastPriceDate}</span>
            </TableCell>
            <TableCell>
              <span className={row.todayChgPercent.startsWith("+") ? "text-green-600" : "text-red-600"}>
                {row.todayChgPercent}
              </span>
              <br />
              <span className={row.todayChgValue.startsWith("-") ? "text-red-600 text-xs" : "text-green-600 text-xs"}>
                {row.todayChgValue}
              </span>
            </TableCell>
            <TableCell>
              <span className={row.unrealizedPerfPercent.startsWith("+") ? "text-green-600" : "text-red-600"}>
                {row.unrealizedPerfPercent}
              </span>
              <br />
              <span className={row.unrealizedPerfValue.startsWith("-") ? "text-red-600 text-xs" : "text-green-600 text-xs"}>
                {row.unrealizedPerfValue}
              </span>
            </TableCell>
            <TableCell>
              {row.marketValue}
              <br />
              <span className="text-xs text-muted-foreground">{row.purchaseValue}</span>
            </TableCell>
            <TableCell>{row.weight}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}