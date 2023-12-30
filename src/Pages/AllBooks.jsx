import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AllBookCard from "../Components/AllBookCard";


const AllBooks = () => {
    const loadedBooks = useLoaderData()
    return (
        <div>
            <div className="text-blue-500">
                <Navbar></Navbar>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 max-w-7xl mx-auto gap-6 mt-14">
            {
                loadedBooks?.map(book => <AllBookCard key={book._id} book={book}></AllBookCard>)
            }
            </div>
        </div>
    );
};

export default AllBooks;