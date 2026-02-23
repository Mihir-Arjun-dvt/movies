import MovieLabel from "./MovieLabel";

interface MovieCardProps {
    title: string;
    genre: string;
    showtime: string;
    imageURL: string;
}

export default function MovieCards({ title, genre, showtime, imageURL }: MovieCardProps) {
    return (
        <article className="card w-80 bg-base-100 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <figure className="pt-4">
                <img
                    src={imageURL}
                    alt={title}
                    className="h-72 w-56 object-contain"
                />
            </figure>

            <div className="card-body bg-base-100 items-center text-center">
                <h2 className="card-title text-lg">{title}</h2>

                <div className="flex flex-wrap justify-center gap-2">
                    <span className="badge badge-secondary">{genre}</span>
                    <MovieLabel showtime={showtime} />
                    <span className="badge badge-outline">{showtime}:00</span>
                </div>
            </div>
        </article>
    );
}
