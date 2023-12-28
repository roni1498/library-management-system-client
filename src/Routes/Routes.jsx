import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BookByCategory from "../Pages/BookByCategory";
import BookDetails from "../Pages/BookDetails";

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
                element: <AddBook></AddBook>
            },
            {
                path: "/allBooks",
                element: <AllBooks></AllBooks>,
                loader: () => fetch('http://localhost:5000/book')
            },
            {
                path: "bookByCategory/:category",
                element: <BookByCategory></BookByCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.category}`)
            },
            {
                path: "bookDetail/:id",
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/single-book/${params.id}`)
            }
        ]
    }
])
export default router;