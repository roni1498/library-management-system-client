import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BookByCategory from "../Pages/BookByCategory";
import BookDetails from "../Pages/BookDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import BorrowBooks from "../Pages/BorrowBooks";
import UpdateBook from "../Pages/UpdateBook";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addBook",
                element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>
            },
            {
                path: "/allBooks",
                element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
                loader: () => fetch('https://library-management-system-server-mu.vercel.app/book')
            },
            {
                path: "bookByCategory/:category",
                element: <BookByCategory></BookByCategory>,
                loader: ({params}) => fetch(`https://library-management-system-server-mu.vercel.app/book/${params.category}`)
            },
            {
                path: "bookDetail/:id",
                element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://library-management-system-server-mu.vercel.app/single-book/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/borrowedBooks",
                element: <PrivateRoutes><BorrowBooks></BorrowBooks></PrivateRoutes>,
                // loader: () => fetch('https://library-management-system-server-mu.vercel.app/borrowBook')
            },
            {
                path: "/updateBook/:id",
                element: <PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
                loader: ({params}) => fetch(`https://library-management-system-server-mu.vercel.app/single-book/${params.id}`)
            },
        ]
    }
])
export default router;