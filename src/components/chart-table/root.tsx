import { ReactNode } from "react";

type ChartTableRootProps = {
  children?: ReactNode;
  columnOne?: string;
  columnTwo?: string;
};

export function ChartTableRoot({
  children,
  columnOne,
  columnTwo,
}: ChartTableRootProps) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th>
            <p>{columnOne}</p>
          </th>

          <th className="text-left">
            <p>{columnTwo}</p>
          </th>
        </tr>
      </thead>
      <div className="mt-2" />
      <tbody>{children}</tbody>
    </table>
  );
}
