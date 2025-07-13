interface ImageCounts {
  total: number;
  image: number;
  graphic: number;
  video: number;
}

interface FilterButtonsProps {
  filter: 'all' | 'image' | 'video' | 'graphic';
  imageCounts: ImageCounts;
  onFilterChange: (filter: 'all' | 'image' | 'video' | 'graphic') => void;
}

export default function FilterButtons({ filter, imageCounts, onFilterChange }: FilterButtonsProps) {
  const filterButtons = [
    { key: 'all' as const, label: 'すべて', count: imageCounts.total },
    { key: 'image' as const, label: 'イラスト', count: imageCounts.image },
    { key: 'graphic' as const, label: 'グラフィック', count: imageCounts.graphic },
    { key: 'video' as const, label: 'アニメーション', count: imageCounts.video },
  ];

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {filterButtons.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            filter === key
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}