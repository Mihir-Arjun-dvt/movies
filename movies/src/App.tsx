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
    <div className='p-4 min-h-screen'>
      <div className='flex justify-between items-center'>
        <h1 className='cookie-regular'>Mihir's Movies</h1>
        <DropdownFilter selected={filter} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-8'>
        {filteredMovies.map((movie) =>
          <MovieCards
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            showtime={movie.showtime}
            imageURL={movie.imageUrl}
          />
        )}
      </div>
    </div>
  )
}

export default App