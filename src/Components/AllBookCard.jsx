import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

const AllBookCard = ({ book }) => {
    const {
        _id,
        bookName,
        authorName,
        category,
        image,
      } = book;
    return (
        <section className="mx-auto">
        <div className="w-[300px] h-[460px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="h-60 object-contain mx-auto"
              src={image}
              alt="Book Cover"
            />
          </a>
          <div className="p-5 flex flex-col h-[210px]">
            <div className="flex-none">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {bookName}
              </h5>
            </div>
            <div className="flex-grow">
            </div>
            <div className="">
              <p className=" text-gray-700 dark:text-gray-400 text-xl font-semibold">{authorName}</p>
              <p className=" text-gray-700 dark:text-gray-400 ">{category}</p>
            <Link to={`/updateBook/${_id}`}>
            <button className="font-bold text-blue-500 flex items-center gap-2 ">
            <GrUpdate />
            Update info
            </button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AllBookCard;