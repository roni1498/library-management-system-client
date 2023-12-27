import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({category}) => {
    return (
        <div>
    
      <div className="grid md:grid-cols-3 gap-8 md:max-w-7xl mx-auto justify-center">
            <div className="card w-72 bg-base-100 shadow-xl">
            <div className="flex justify-around items-center my-8">
                <h2 className="card-title">{category.categoryName}</h2>
                <FaArrowRight></FaArrowRight>
              </div>
              <div className="rounded-lg">
                <img
                  className="h-60 w-full object-cover rounded-b-lg"
                  src={category.img}
                  alt='img'
                />
              </div>
             
            </div>
      </div>
    </div>
    );
};

export default CategoryCard;