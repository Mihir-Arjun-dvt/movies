import MovieCards from './components/MovieCards.tsx'
import DropdownFilter from './components/DropdownFilter.tsx'
import { movies } from './data/data.tsx'
import { Showtime, type ShowtimeType } from './types/showtime.tsx'
import { getShowtimePeriod, getFilterFromURL } from './utils/showtime.ts'
import './index.css'

function App() {
  const filter: ShowtimeType = getFilterFromURL();

  const filteredMovies = filter === Showtime.All
    ? movies
    : movies.filter((movie) => getShowtimePeriod(movie.showtime) === filter);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold cookie-regular">
          Mihir's Movies
        </h1>
        <DropdownFilter selected={filter} />
      </header>

      <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {filteredMovies.map((movie) => (
          <MovieCards key={movie.id} title={movie.title} genre={movie.genre} showtime={movie.showtime} imageURL={movie.imageUrl} />
        ))}
      </main>
    </div>
  )
}

export default App