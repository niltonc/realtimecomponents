type ChartTableBodyProps = {
  columnOne?: string;
  columnTwo?: string;
  colors?: string;
};

export function ChartTableBody({
  columnOne,
  columnTwo,
  colors,
}: ChartTableBodyProps) {
  return (
    <tr className="border-b border-t border-[#dedede]">
      <td className="flex gap-2 py-1">
        <div
          className={`h-1.5 ${colors}`}
          style={{ width: "2%", height: "20px", borderRadius: "4px" }}
        />
        <p className="text-sm">{columnOne}</p>
      </td>

      <td className="py-1 text-left">
        <p className="text-sm">{columnTwo}</p>
      </td>
    </tr>
  );
}
