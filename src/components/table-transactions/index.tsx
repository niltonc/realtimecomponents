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
  type: string;
  quantity: string;
  executionPrice: string;
  executionValue: string;
  assetClass: string;
  date: string;
  time: string;
};

const data: Row[] = [
  {
    name: "EFG International ...",
    isin: "GT573086466",
    type: "Buy",
    quantity: "8,952",
    executionPrice: "8,803.92 JPY",
    executionValue: "7,656.33 USD",
    assetClass: "Future",
    date: "3/31/25",
    time: "12:05:26 AM",
  },
  {
    name: "Inter-American Dev...",
    isin: "TZ48776410",
    type: "Sell",
    quantity: "7,674",
    executionPrice: "6,802.38 AUD",
    executionValue: "947.29 USD",
    assetClass: "Bond",
    date: "5/07/25",
    time: "02:41:26 AM",
  },
  {
    name: "Rough Rice",
    isin: "TC945627449",
    type: "Buy",
    quantity: "7,331",
    executionPrice: "2,677.97 USD",
    executionValue: "7,132.98 JPY",
    assetClass: "Interest Rate",
    date: "12/30/24",
    time: "09:38:53 AM",
  },
  {
    name: "Cbo Territoria 3.75...",
    isin: "KI231883339",
    type: "Sell",
    quantity: "4,782",
    executionPrice: "3,965.72 JPY",
    executionValue: "7,170.84 JPY",
    assetClass: "Bond",
    date: "12/07/24",
    time: "05:04:53 AM",
  },
  {
    name: "Cotton",
    isin: "LY348602857",
    type: "Sell",
    quantity: "9,364",
    executionPrice: "9,087.58 JPY",
    executionValue: "6,798.66 JPY",
    assetClass: "Option",
    date: "11/28/24",
    time: "02:44:53 AM",
  },
  {
    name: "Intesa Sanpaolo - ...",
    isin: "SB287192859",
    type: "Sell",
    quantity: "7,296",
    executionPrice: "7,969.95 GBP",
    executionValue: "5,374.64 JPY",
    assetClass: "Option",
    date: "11/03/24",
    time: "07:08:53 AM",
  },
  {
    name: "Telecom Italia Spa ...",
    isin: "RE627394077",
    type: "Buy",
    quantity: "4,293",
    executionPrice: "874.79 GBP",
    executionValue: "1,872.20 JPY",
    assetClass: "Option",
    date: "2/28/25",
    time: "08:44:53 AM",
  },
  {
    name: "Hong Kong Dollar",
    isin: "FJ683306407",
    type: "Sell",
    quantity: "2,308",
    executionPrice: "2,639.22 USD",
    executionValue: "9,311.52 JPY",
    assetClass: "Currency",
    date: "12/01/24",
    time: "04:02:53 AM",
  },
  {
    name: "Brazil Bovespa",
    isin: "SB287192859",
    type: "Buy",
    quantity: "9,054",
    executionPrice: "4,598.45 EUR",
    executionValue: "",
    assetClass: "Index",
    date: "11/05/24",
    time: "10:12:53 AM",
  },
];

export function TransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Name<br />
            <span className="font-normal text-xs">ISIN</span>
          </TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Quantity/Nominal</TableHead>
          <TableHead>
            Execution price<br />
            <span className="font-normal text-xs">Execution value</span>
          </TableHead>
          <TableHead>Asset class</TableHead>
          <TableHead>
            Date<br />
            <span className="font-normal text-xs">Time</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={row.isin}>
            <TableCell>
              {row.name}
              <br />
              <span className="text-xs text-muted-foreground">{row.isin}</span>
            </TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>
              {row.executionPrice}
              <br />
              <span className="text-xs text-muted-foreground">{row.executionValue}</span>
            </TableCell>
            <TableCell>{row.assetClass}</TableCell>
            <TableCell>
              {row.date}
              <br />
              <span className="text-xs text-muted-foreground">{row.time}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}