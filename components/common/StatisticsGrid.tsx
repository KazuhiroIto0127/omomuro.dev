interface StatisticItem {
  value: number;
  label: string;
  color: string;
}

interface StatisticsGridProps {
  items: StatisticItem[];
  className?: string;
}

export default function StatisticsGrid({ items, className = '' }: StatisticsGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
          <div className="text-center">
            <div className={`text-2xl font-bold ${item.color}`}>
              {item.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}