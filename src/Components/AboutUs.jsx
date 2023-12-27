import aboutUs from "../assets/aboutUs.png";
const AboutUs = () => {
  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-3/4">
        <img src={aboutUs} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-blue-500">About Us</h1>
          <p className="py-6">
            Welcome to BookHiv Hub, where we believe in the transformative power
            of knowledge and the joy of reading. Our library management system
            is designed to create an immersive and seamless experience for book
            lovers, students, and educators alike.
          </p>
          <h1 className="text-2xl font-bold text-blue-500">Our Vision</h1>
          <p>
            At BookHiv Hub, we envision a world where access to information is
            effortless and enjoyable. We strive to build a platform that not
            only organizes and manages libraries efficiently but also fosters a
            vibrant community of readers.
          </p>
          <button className="btn btn-primary rounded-lg mt-6">know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
