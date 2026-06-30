interface TableRowProps {
  multiplier: number;
  isEven: boolean;
}

export default function TableRow({ multiplier, isEven }: TableRowProps) {
  const result = 22 * multiplier;

  return (
    <div
      className={`flex items-center justify-between px-6 py-3 text-lg transition-colors ${
        isEven
          ? 'bg-indigo-50/80'
          : 'bg-white'
      } hover:bg-indigo-100`}
    >
      <span className="font-medium text-gray-700">
        22 <span className="text-indigo-400 mx-1">×</span> {multiplier}
      </span>
      <span className="text-indigo-500 font-bold">=</span>
      <span className="font-bold text-indigo-700 text-xl tabular-nums w-16 text-right">
        {result}
      </span>
    </div>
  );
}
