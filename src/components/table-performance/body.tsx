type Props = {
  name?: string;
  code?: string;
  percent?: string;
  value?: string;
};

export function TableBody({ name, code, percent, value }: Props) {
  const getColorClass = (value?: string) =>
    value?.startsWith("-") ? "text-[#DD000F]" : "text-[#008100]";
  return (
    <tr className="border-b border-t border-[#dedede]">
      <td className="py-2">
        <p className="truncate max-w-xs text-sm" style={{ width: "200px" }}>
          {name}
        </p>
        <p className="text-xs text-[#697073]">{code}</p>
      </td>

      <td className="py-2 text-right">
        <p className={`text-sm ${getColorClass(percent)}`}>{percent}</p>
        <p className={`text-xs ${getColorClass(value)}`}>{value}</p>
      </td>

      <td className="py-2 flex items-center justify-center">
        <div className="flex items-center w-50 h-4 bg-gray-200">
          <div
            className="h-4"
            style={{
              width: percent ? `${Math.abs(parseFloat(percent)) * 100}%` : "0%",
              background: percent?.startsWith("-") ? "#DD000F" : "#008100",
            }}
          />
        </div>
      </td>
    </tr>
  );
}
