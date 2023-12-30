
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import BookCategory from "../Components/BookCategory";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  
  return (
    <div>
      <div className="relative text-white">
        <Banner></Banner>
      </div>
      <div className="absolute w-full top-0 text-white">
        <Navbar></Navbar>
      </div>
      <AboutUs></AboutUs>
      <BookCategory></BookCategory>
      <Footer></Footer>
    </div>
  );
};

export default Home;
