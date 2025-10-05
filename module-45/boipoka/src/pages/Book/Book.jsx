import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({singleBook}) => {
    
    const {bookName, image, rating, category, tags, yearOfPublishing, publisher,bookId} = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
            <figure className="p-5 bg-gray-100 w-2/3 mx-auto">
                < img className="h-42"
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex gap-5">
                    {
                        tags.map(tags=><button >{tags}</button>)
                    }
                </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book by : {publisher}</p>
                <div className="border-t-1 border-dashed"></div>
                <div className="card-actions justify-end">
                    <div className="badge">{category}</div>
                    <div className="badge ">{rating} <FaStarHalfStroke /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;