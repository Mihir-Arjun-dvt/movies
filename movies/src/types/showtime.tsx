export const Showtime = {
  All: 'All',
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
} as const;

export type ShowtimeType = typeof Showtime[keyof typeof Showtime];