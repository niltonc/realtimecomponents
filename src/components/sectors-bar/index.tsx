export function SectorsBar({
  colors = [
    "bg-blue-500",
    "bg-green-600",
    "bg-orange-500",
    "bg-pink-600",
    "bg-sky-500",
    "bg-purple-600",
    "bg-yellow-600",
    "bg-blue-700",
    "bg-teal-600",
  ],
  total = 9,
  emptyColor = "bg-gray-300",
}) {
  return (
    <div className="my-9">
      <h2 className="text-2xl font-bold m">Sectors</h2>
      <div className="text text-gray-600 mb-2 mts">Weighting to the total portfolio</div>
      <div className="flex items-center gap-0.5 mb-1 mt-1">
        {colors.map((color, i) => (
          <div key={i} className={`${color} h-5 w-12 `} />
        ))}
        <div className={`${emptyColor} h-5 flex-1 `} />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text text-gray-500 ">Sectors</span>
        <span className="text font-bold">{total}</span>
      </div>
    </div>
  );
}