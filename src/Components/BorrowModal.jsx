import axios from "axios";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const BorrowModal = ({ visible, onClose, book }) => {
  const { _id, bookName, category, image, } = book;
  const [returnDate, setReturnDate] = useState("");
  const [borrowDate, setBorrowDate] = useState(getDate())
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const userName = user?.displayName;
  
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }


  const handleBorrowBook = () => {
    const borrowBook = {
      userName,
      email,
      bookName,
      category,
      image,
      returnDate,
      borrowDate
    };

    console.log(borrowBook);

    // Check if returnDate is not provided
    if (!returnDate) {
      Swal.fire({
        title: "Warning",
        text: "Please provide a return date.",
        icon: "warning",
      });
      return;
    }
    console.log(borrowBook);

    axios
      .post("http://localhost:5000/borrowBook", borrowBook)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // Show success toast
          Swal.fire({
            title: "Success",
            text: "You Borrowed Book Successfully!",
            icon: "success",
          });
          handleClose();
          setReturnDate("");
        }
      })
      .catch((error) => {
        console.log(error);
        // show error toast
        Swal.fire({
          title: "Error",
          text: "Failed to borrow book. Please try again.",
          icon: "error",
        });
      });
  };

  const handleClose = () => {
    onClose();
  };

  const handleContainerClick = (e) => {
    if (e.target.id === "container") {
      handleClose();
    }
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleContainerClick}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-blue-100 rounded-lg p-4">
        <p className="text-xl font-medium text-blue-500">
          Please Submit the Return date..
        </p>
        <div className="mt-6 space-y-4">
          <input
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full p-2 rounded-lg"
            type="date"
            name="date"
            id=""
          />{" "}
          <br />
          <input
            onClick={() => handleBorrowBook(_id)}
            className="btn w-full rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-medium"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default BorrowModal;
