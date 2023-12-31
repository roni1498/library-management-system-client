import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";
import { CgLogOut } from "react-icons/cg";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  // handle logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Loged Out!",
          text: "You log out Successfully!",
          icon: "success",
        });
      })
      .catch();
  };

  const links = (
    <>
      <li className="hover:text-blue-600 hover:font-bold font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-blue-600 hover:font-bold font-semibold">
        <NavLink to={"/addBook"}>Add Book</NavLink>
      </li>
      <li className="hover:text-blue-600 hover:font-bold font-semibold">
        <NavLink to={"/allBooks"}>All Books</NavLink>
      </li>
      {
              user?.email && <li className="hover:text-blue-600 hover:font-bold font-semibold">
              <NavLink to={"/borrowedBooks"}>Borrowed Books</NavLink>
            </li>
            }
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
            
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex md:flex-col items-center gap-1">
            <img className="md:h-11 md:w-11 h-8 w-8" src={logo} alt="" />
            <h1 className="md:text-2xl text-xl font-bold text-blue-500 flex flex-col md:flex-row md:gap-2 text-center">
              BookHive <span className="text-blue-800 -mt-3 md:mt-0">Hub</span>
            </h1>
          </div>
        </Link>
      </div>
      <div className=" hidden lg:flex navbar-center">
        <ul className="flex flex-row px-1 space-x-3">{links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* user photo and name / login and logout button toggle */}
        {user ? (
          <>
            <p className="">{user.displayName}</p>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <button
              onClick={handleLogOut}
              className="btn rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-medium md:text-lg border-none mr-3"
            > <CgLogOut className="text-2xl"></CgLogOut>
              Log Out
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-blue-400 border-none text-white rounded-lg md:text-lg"
          >
            <FiLogIn></FiLogIn>Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
