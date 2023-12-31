import { Link } from "react-router-dom";
import banner from "../assets/pageNotFound.png";

const PageNotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
              <img src={banner} alt="" />
            <h1 className="text-5xl font-bold mb-6">Page Not Found</h1>
           <Link to="/"> <button className="btn btn-primary bg-black text-white rounded-lg">Back Home</button></Link>
          </div>
        </div>
      </div>
    );
};

export default PageNotFound;