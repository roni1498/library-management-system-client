import Navbar from "../Components/Navbar";
import { useLoaderData, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { FaBookReader, FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import BorrowModal from "./../Components/BorrowModal";
import axios from "axios";

const BookDetails = () => {
  const book = useLoaderData();
  const { _id, bookName, authorName, category, description, rating, image, quantity } = book;
  const numberRating = parseFloat(rating);
  const [selectedRating, setSelectedRating] = useState(numberRating);
  const navigate = useNavigate();
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const [bookQuantity, setBookQuantity] = useState(parseInt(quantity));

  const handleOnClose = () => setShowBorrowModal(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };
  return (
    <div>
      <div className="text-blue-500">
        <Navbar></Navbar>
      </div>
      <div className="w-full h-screen lg:flex flex-start mt-12">
        <div className="relative lg:w-1/2 h-[600px] flex flex-col">
          <img
            src={image}
            className="w-full h-full object-contain"
            alt="image"
          />
        </div>
        <div className="lg:w-1/2 h-full px-20">
          <div className="mb-10">
            <button
              className="font-bold text-blue-500 inline"
              onClick={handleGoBack}
            >
              <FaArrowLeft className="inline mr-2"></FaArrowLeft>Go Back
            </button>
          </div>
          <button className="py-1 px-2 bg-black text-white rounded-md mb-2">
            {category}
          </button>
          <h1 className="text-2xl font-semibold text-blue-500">{bookName}</h1>
          <h1 className="text-xl font-semibold my-4">
            Author: <span className=" text-green-800"> {authorName}</span>
          </h1>
          <div className="flex gap-6">
            <h3 className="text-4xl font-normal"></h3>
          </div>
          <p className="my-4 font-medium">{description}</p>
          <div className="rating gap-1 mb-4">
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
          </div>
          <div className="mt-20 space-x-4">
            <button
              onClick={() => setShowBorrowModal(true)}
              disabled={bookQuantity === 0}
              className={`px-3 py-2 rounded hover:scale-95 transition text-xl ${
                bookQuantity > 0 ? 'bg-gray-700 text-white hover:bg-gray-500' : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
            >
              Borrow
            </button>
            <BorrowModal
              onClose={handleOnClose}
              visible={showBorrowModal}
              book={book}
            ></BorrowModal>
            <button
              onClick={() => handleBorrowBook(_id)}
              className="btn text-lg rounded-sm hover:scale-95"
            >
              <FaBookReader />
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
