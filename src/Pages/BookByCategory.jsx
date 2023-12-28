import { useLoaderData } from "react-router-dom";
import BookCard from "../Components/BookCard";
import Navbar from "../Components/Navbar";


const BookByCategory = () => {
    const bookByCategory = useLoaderData() 
    console.log(bookByCategory)
    return (
        <div>
            <div className="text-blue-600">
                <Navbar></Navbar>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-20 max-w-7xl mx-auto">
                {
                    bookByCategory?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookByCategory;