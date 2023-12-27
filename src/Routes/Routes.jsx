import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import AddBook from "../Pages/AddBook";

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
            }
        ]
    }
])
export default router;