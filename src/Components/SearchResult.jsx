import { Link } from "react-router-dom";


const SearchResult = ({ results }) => {
 

 
  return (
    <div className="rounded-lg absolute w-[400px] md:w-[950px] h-[100px] overflow-hidden overflow-y-auto">
      {results.map(book => (
       <Link to={`/bookDetail/${book._id}`}> <p
       key={book._id}
       className="rounded-md text-left px-6 cursor-pointer text-blue-500 font-medium text-lg hover:text-white"
     >
       {book.bookName}
     </p></Link>
      ))}
    </div>
  );
};

export default SearchResult;
