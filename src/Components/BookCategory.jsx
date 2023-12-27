import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const BookCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/category')
        .then(res => setCategories(res.data))
    },[])
    return (
        <div className="md:max-w-7xl mx-auto md:my-28 my-20">
              <h2 className="text-3xl font-bold text-center md:text-start mb-4">
        Shop By <span className="text-blue-500">Category:</span>
      </h2>
            <div className="flex md:flex-row flex-col gap-6 ">
                {
                    categories?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default BookCategory;