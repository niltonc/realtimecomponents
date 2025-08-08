type Props = {
  children: React.ReactNode;
  title?: string;
};

export function UnrealizedPerformanceRoot({ children, title }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

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

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
