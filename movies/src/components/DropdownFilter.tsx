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
    <div className="dropdown dropdown-end text-3xl">
      <button
        tabIndex={0}
        className="btn btn-outline btn-sm min-w-30 h-12"
        aria-label="Filter movies by showtime"
      >
        {selected}
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box shadow-md mt-2 w-44"
      >
        {Object.values(Showtime).map((timeSlot) => (
          <li key={timeSlot}>
            <a
              href={`?filter=${timeSlot}`}
              className={selected === timeSlot ? 'active font-semibold' : ''}
            >
              {timeSlot}
            </a>
          </li>
        ))}
      </ul>
    </div>

  );
}

export { Showtime };
export type { Showtime as ShowtimeType };