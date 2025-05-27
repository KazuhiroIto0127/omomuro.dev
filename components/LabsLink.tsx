import Link from 'next/link';

const LabsLink = ({ id, emoji, title }: { id: string; emoji: string; title: string }) => {
  return (
    <Link href={`/labs/${id}`} className="group block h-full">
      <div className="h-full transform overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-3 hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
        {/* 実験的なヘッダー */}
        <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 p-2 dark:from-gray-700 dark:to-gray-600">
          <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
          <div className="absolute top-1 right-4 h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="text-center text-xs font-medium text-gray-600 dark:text-gray-300">
            EXPERIMENT
          </div>
        </div>

        {/* 絵文字エリア */}
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
          {/* 背景パターン */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-2 h-4 w-4 border-2 border-teal-400 rounded-full"></div>
            <div className="absolute top-6 right-4 h-2 w-2 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-4 left-6 h-3 w-3 border border-purple-400 rotate-45"></div>
            <div className="absolute bottom-2 right-2 h-5 w-5 border-2 border-green-400 rounded-full"></div>
          </div>

          {/* 絵文字 */}
          <span className="relative text-6xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            {emoji}
          </span>

          {/* ホバー時のグロー効果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        {/* タイトルエリア */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
            {title}
          </h3>

          {/* プログレスバー風装飾 */}
          <div className="mt-3 h-1 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
            <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
          </div>

          {/* 実験ステータス */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              実験中
            </span>
            <div className="flex space-x-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
            </div>
          </div>
        </div>

        {/* ホバー時の詳細ボタン */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-teal-500 to-blue-500 p-2 text-center text-white opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-xs font-medium">実験を開始 →</span>
        </div>
      </div>
    </Link>
  );
};

export default LabsLink;
