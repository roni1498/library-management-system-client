

import Navbar from "../Components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const BorrowBooks = () => {
   const { user } = useContext(AuthContext);
   const [books, setBooks] = useState([])
   const axiosSecure = useAxiosSecure()
//    const url = `http://localhost:5000/borrowBook?email=${user.email}`
   const url = `/borrowBook?email=${user.email}`
   useEffect(()=>{
    axiosSecure.get(url)
    .then(res => {
        console.log(res.data)
        setBooks(res.data)
    })
   },[url, axiosSecure])

//    remove borrowBook from data base and client side
const handleDelete = _id =>{

    Swal.fire({
        title: "Are you sure?",
        text: "You want to Remove the Book!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!"
      }).then((result) => {
   axios.delete(`http://localhost:5000/borrowBook/${_id}`)
   .then(response => {
    console.log(response?.data)
    if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Book has been Removed.",
          icon: "success"
        });
        if(response?.data?.deletedCount>0){
              const remaining = books.filter(book => book._id !== _id);
              setBooks(remaining)
        }
      }
   })
    })
}
    return (
        <div>
        <div className="text-blue-500">
        <Navbar></Navbar>
        </div>
  
        <div className="overflow-x-auto max-w-7xl mx-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Book</th>
                <th>Category</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
                <th>Return</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {books.map((book) => ( <tr key={book._id}>
        <th>
          <label>
          <button onClick={()=>handleDelete(book._id)} className="btn rounded-lg">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={book.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{book.bookName}</div>
            </div>
          </div>
        </td>
        <td>
          {book.category}
        </td>
        <td>
            {book.borrowDate}
        </td>
        <td>
            <p className="">{book.returnDate}</p>
        </td>
        <td>
            <button className="text-blue-500 hover:text-blue-700 font-semibold hover:font-bold text-lg ">Return</button>
        </td>
      </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BorrowBooks;