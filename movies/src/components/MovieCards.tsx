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
                    className="mt-4" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{genre}</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{showtime}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}
