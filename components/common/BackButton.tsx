import Link from 'next/link';

interface BackButtonProps {
  href: string;
  onClick: (e: React.MouseEvent) => Promise<void>;
  label: string;
  colorClass?: string;
  className?: string;
}

export default function BackButton({ 
  href, 
  onClick, 
  label, 
  colorClass = 'text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
  className = ''
}: BackButtonProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <Link
        href={href}
        className={`inline-flex items-center gap-2 ${colorClass} transition-colors duration-200 group`}
        onClick={onClick}
      >
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </div>
  );
}