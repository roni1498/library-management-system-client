import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    _id,
    bookName,
    authorName,
    rating,
    category,
    image,
  } = book;

  const numberRating = parseInt(rating)

//   ratings
const [selectedRating, setSelectedRating] = useState(numberRating);

const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

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
            <div className="rating gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              name={`rating-${bookName}`}
              className={`mask mask-star-2 bg-${
                value <= selectedRating ? "orange" : "bg-orange-300"
              }-400`}
              checked={value === selectedRating}
              onChange={() => handleRatingChange(value)}
            />
          ))}
        </div> <br />
          <Link to={`/bookDetail/${_id}`}>
          <button className="inline font-bold text-blue-500">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCard;
