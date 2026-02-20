const Showtime = {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
} as const;

type Showtime = typeof Showtime[keyof typeof Showtime];

const showtimeBadgeMap: Record<Showtime, string> = {
  [Showtime.Morning]: 'badge bg-blue-300',
  [Showtime.Afternoon]: 'badge bg-orange-500 text-white',
  [Showtime.Evening]: 'badge bg-sky-900 text-white',
};

function getShowtime(hour: number): Showtime {
  if (hour < 12) return Showtime.Morning;
  if (hour < 17) return Showtime.Afternoon;
  return Showtime.Evening;
}

export default function MovieLabel({ showtime }: { showtime: string }) {
  const period = getShowtime(Number(showtime));
  return <div className={showtimeBadgeMap[period]}>{period}</div>;
}