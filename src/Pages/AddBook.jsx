import axios from "axios";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";


const AddBook = () => {

    const handleAddBook = e =>{
        e.preventDefault();

        const form = e.target;
        const bookName = form.bookName.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const newBook = { bookName, quantity, authorName, category, description, rating, image };
        console.log(newBook)

        // // data send to the server
            axios.post('http://localhost:5000/book', newBook)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: "New Book",
                            text: "added successfully"
                          });
            }})
    }
    return (
        <div>
      <div className="text-blue-500">
      <Navbar></Navbar>
      </div>
    <div className="bg-[#F4F3F0] p-12 max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-semibold text-center mb-12">Add <span className="text-blue-500">Book</span></h1>
       <form onSubmit={handleAddBook}>
         {/* product and quantity */}
         <div className="md:flex gap-2 mb-4">
       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Book Name</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="bookName" placeholder="Book Name" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Quantity</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="quantity" placeholder="Quantity" />
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
       <input className="input input-bordered w-full" type="text" name="authorName" placeholder="Author Name" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Category</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="category" placeholder="Category" />
       </label>
       </div>
        </div>

        {/* short description and Rating */}
      <div className="md:flex gap-2 mb-4">
       <div className="form-control w-1/2">
        <label className="label">
            <span className="label-text">Description</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="description" placeholder="Description" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="rating" placeholder="Rating" />
       </label>
       </div>
      </div>

       {/* image */}
       <div className="form-control mb-6">
        <label className="label">
            <span className="label-text">Book Image</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="image" placeholder="Book Image" />
       </label>
       </div>

       {/* add Book button */}
       <input type="submit" className="btn w-full" value="Add Book" />
       </form>
    </div> 
    </div>
    );
};

export default AddBook;