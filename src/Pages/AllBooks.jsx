import { useLoaderData } from "react-router-dom";
import BookCard from "../Components/BookCard";
import Navbar from "../Components/Navbar";


const AllBooks = () => {
    const loadedBooks = useLoaderData()
    return (
        <div>
            <div className="text-blue-500">
                <Navbar></Navbar>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 max-w-7xl mx-auto gap-6 mt-14">
            {
                loadedBooks?.map(book => <BookCard key={book._id} book={book}></BookCard>)
            }
            </div>
        </div>
    );
};

export default AllBooks;