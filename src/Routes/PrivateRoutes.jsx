import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg mt-60"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
    children: PropTypes.node
}
export default PrivateRoutes;