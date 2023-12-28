import Navbar from "../Components/Navbar";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBookReader, FaArrowLeft } from "react-icons/fa";

const BookDetails = () => {
  const book = useLoaderData();
  const { bookName, authorName, category, description, rating, image } = book;
  const numberRating = parseFloat(rating);
  const [selectedRating, setSelectedRating] = useState(numberRating);
  const navigate = useNavigate();

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
          <div className="flex gap-2">
            <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-slate-900 text-white font-semibold rounded-sm">
              Borrow
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg text-blue-500">Please provide the return date..</h3>
               <form>
               <div className="space-y-4">
               <input className="input input-bordered w-full rounded-lg" type="date" name="date" id="" />
                <br />
                <input className="btn hover:bg-blue-500 hover:text-white w-full rounded-lg" type="submit" value="Submit" />
               </div>
               </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button className="btn text-lg rounded-sm">
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
