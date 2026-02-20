import MovieCards from './components/MovieCards.tsx'
import './index.css'
import { movies } from './data/data.tsx'

function App() {

  return (
    <>
      <div className='p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-8'>
          {movies.map((movie) =>
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
    </>
  )
}

export default App
