const Showtime = {
  All: 'All',
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
} as const;

type Showtime = typeof Showtime[keyof typeof Showtime];

interface FilterDropdownProps {
  selected: Showtime;
}

export default function DropdownFilter({ selected }: FilterDropdownProps) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">{selected}</div>
      <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {Object.values(Showtime).map((timeSlot) => (
          <li key={timeSlot}>
            <a href={`?filter=${timeSlot}`}>{timeSlot}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Showtime };
export type { Showtime as ShowtimeType };