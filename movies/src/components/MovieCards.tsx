import MovieLabel from "./MovieLabel";

interface MovieCardProps {
    title: string;
    genre: string;
    showtime: string;
    imageURL: string;
}

export default function MovieCards({ title, genre, showtime, imageURL }: MovieCardProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={imageURL}
                    alt={title}
                    className="mt-4 h-80 w-60" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">
                    {title}
                </h2>
                <div className="card-actions justify-center">
                    <div className="badge badge-secondary">{genre}</div>
                    <MovieLabel showtime={showtime} />
                    <div className="badge badge-outline">{showtime}:00</div>
                </div>
            </div>
        </div>
    );
}
