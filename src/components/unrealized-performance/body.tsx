type Props = {
  name?: string;
  code?: string;
  percent?: string;
  value?: string;
};

export function UnrealizedPerformanceBody({
  name,
  code,
  percent,
  value,
}: Props) {
  return (
    <tr className="border-b border-t border-[#dedede]">
      <td className="py-2">
        <p className="truncate max-w-xs" style={{ width: "200px" }}>
          {name}
        </p>
        <p>{code}</p>
      </td>

      <td className="py-2 text-right">
        <p>{percent}</p>
        <p>{value}</p>
      </td>

      <td className="py-2 flex items-center justify-center">
        <div className="flex items-center w-50 h-4 bg-gray-200">
          <div className="h-4 bg-green-500" style={{ width: "67%" }} />
        </div>
      </td>
    </tr>
  );
}
