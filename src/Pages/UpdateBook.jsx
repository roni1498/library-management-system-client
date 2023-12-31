import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";


const UpdateBook = () => {

    const updateBook = useLoaderData();
    const { _id, bookName, quantity, authorName, category, description, rating, image } = updateBook;
    const [selectedCategory, setSelectedCategory] = useState(category);

    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };

    const handleAddBook = e =>{
        e.preventDefault();

        const form = e.target;
        const bookName = form.bookName.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = selectedCategory;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const updateBook = { bookName, quantity, authorName, category, description, rating, image };
        console.log(updateBook)

        // // data send to the server
            axios.put(`https://library-management-system-server-mu.vercel.app/single-book/${_id}`, updateBook)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount>0){
                        Swal.fire({
                            icon: "success",
                            title: "Book Update",
                            text: "updated successfully"
                          });
            }})
    }

    return (
        <div>
        <div className="text-blue-500">
        <Navbar></Navbar>
        </div>
      <div className="bg-[#F4F3F0] p-12 max-w-7xl mx-auto mt-12">
          <h1 className="text-4xl font-semibold text-center mb-12">Update book: <span className="text-blue-500">{bookName}</span></h1>
         <form onSubmit={handleAddBook}>
           {/* book name and quantity */}
           <div className="md:flex gap-2 mb-4">
         <div className="form-control md:w-1/2">
          <label className="label">
              <span className="label-text">Book Name</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="bookName" defaultValue={bookName} placeholder="Book Name" />
         </label>
         </div>
  
         <div className="form-control md:w-1/2">
          <label className="label">
              <span className="label-text">Quantity</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" />
         </label>
         </div>
          </div>
  
          {/* Author name and Category */}
          <div className="md:flex gap-2 mb-4">
         <div className="form-control md:w-1/2">
          <label className="label">
              <span className="label-text">Author Name</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="authorName" defaultValue={authorName} placeholder="Author Name" />
         </label>
         </div>
  
         <div className="form-control md:w-1/2">
          {/* <label className="label">
              <span className="label-text">Category</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="category" defaultValue={category} placeholder="Category" />
         </label> */}
           <label htmlFor="category" className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="input input-bordered w-full required"
          >
            <option value="">-- Choose a category --</option>
            <option value="History">History</option>
            <option value="Travel">Travel</option>
            <option value="Tech">Tech</option>
            <option value="sci-fi">sci-fi</option>
          </select>
         </div>
          </div>
  
          {/* short description and Rating */}
        <div className="md:flex gap-2 mb-4">
         <div className="form-control w-1/2">
          <label className="label">
              <span className="label-text">Description</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="description" defaultValue={description} placeholder="Description" />
         </label>
         </div>
  
         <div className="form-control md:w-1/2">
          <label className="label">
              <span className="label-text">Rating</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="rating" defaultValue={rating} placeholder="Rating" />
         </label>
         </div>
        </div>
  
         {/* image */}
         <div className="form-control mb-6">
          <label className="label">
              <span className="label-text">Book Image</span>
          </label>
         <label >
         <input className="input input-bordered w-full" type="text" name="image" defaultValue={image} placeholder="Book Image" />
         </label>
         </div>
  
         {/* add Book button */}
         <input type="submit" className="btn w-full" value="Update Book" />
         </form>
      </div> 
      </div>
    );
};

export default UpdateBook;