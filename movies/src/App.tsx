import MovieCards from './components/MovieCards.tsx'
import DropdownFilter from './components/DropdownFilter.tsx'
import { movies } from './data/data.tsx'
import { Showtime, type ShowtimeType } from './types/showtime.tsx'
import { getShowtimePeriod, getFilterFromURL } from './utils/showtime.ts'
import './index.css'
import ThemeToggle from './components/ThemeToggle.tsx'

function App() {
  const filter: ShowtimeType = getFilterFromURL();

  const filteredMovies = filter === Showtime.All
    ? movies
    : movies.filter((movie) => getShowtimePeriod(movie.showtime) === filter);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <header className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <h1 className="text-2xl sm:text-2xl font-bold cookie-regular">
          Mihir's Movies
        </h1>

        <div className="flex gap-3">
          <ThemeToggle />
          <DropdownFilter selected={filter} />
        </div>
      </header>

      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filteredMovies.map((movie) => (
          <MovieCards key={movie.id} title={movie.title} genre={movie.genre} showtime={movie.showtime} imageURL={movie.imageUrl} />
        ))}
      </main>
    </div>
  )
}

export default App