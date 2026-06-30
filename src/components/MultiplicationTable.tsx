import TableRow from '@/components/TableRow';

export default function MultiplicationTable() {
  const multipliers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md rounded-2xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
        <h2 className="text-white text-lg font-semibold text-center tracking-wide">
          Table of 22
        </h2>
      </div>

      {/* Rows */}
      <div className="divide-y divide-indigo-100">
        {multipliers.map((m) => (
          <TableRow key={m} multiplier={m} isEven={m % 2 === 0} />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-indigo-50/60 px-6 py-3 text-center text-sm text-indigo-400">
        22 × 1 through 22 × 10
      </div>
    </div>
  );
}
