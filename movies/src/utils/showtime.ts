import { Showtime, type ShowtimeType } from '../types/showtime';

export function getShowtimePeriod(hour: string): ShowtimeType {
  const h = Number(hour);
  if (h < 12) return Showtime.Morning;
  if (h < 17) return Showtime.Afternoon;
  return Showtime.Evening;
}

export function getFilterFromURL(): ShowtimeType {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get('filter');
  if (filter && Object.values(Showtime).includes(filter as ShowtimeType)) {
    return filter as ShowtimeType;
  }
  return Showtime.Morning;
}