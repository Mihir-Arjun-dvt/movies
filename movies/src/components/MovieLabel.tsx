import { FiSun, FiSunset, FiMoon } from 'react-icons/fi';
import type { ReactNode } from 'react';

const Showtime = {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
} as const;

type Showtime = typeof Showtime[keyof typeof Showtime];

const showtimeConfig: Record<
  Showtime,
  { className: string; icon: ReactNode }
> = {
  [Showtime.Morning]: {
    className:
      'badge rounded-full px-3 py-2 bg-yellow-100 text-yellow-700 shadow-sm dark:bg-blue-900 dark:text-blue-200',
    icon: <FiSun className="w-4 h-4" />,
  },
  [Showtime.Afternoon]: {
    className:
      'badge rounded-full px-3 py-2 bg-orange-100 text-orange-700 shadow-sm dark:bg-orange-900 dark:text-orange-200',
    icon: <FiSunset className="w-4 h-4" />,
  },
  [Showtime.Evening]: {
    className:
      'badge rounded-full px-3 py-2 bg-sky-100 text-sky-700 shadow-sm dark:bg-sky-900 dark:text-sky-200',
    icon: <FiMoon className="w-4 h-4" />,
  },
};

function getShowtime(hour: number): Showtime {
  if (hour < 12) return Showtime.Morning;
  if (hour < 17) return Showtime.Afternoon;
  return Showtime.Evening;
}

export default function MovieLabel({ showtime }: { showtime: string }) {
  const period: Showtime = getShowtime(Number(showtime));
  const { className, icon } = showtimeConfig[period];

  return (
    <span
      className={`${className} inline-flex items-center gap-2 text-xs font-semibold`}
      title={`Showtime: ${period}`}
    >
      {icon}
      {period}
    </span>
  );
}