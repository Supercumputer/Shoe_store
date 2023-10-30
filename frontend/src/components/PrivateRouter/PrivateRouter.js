import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../../redux/authentication";

function PrivateRouter() {
   
    const isLogIn = useSelector(state => state.auth.isLoggedIn)

    return isLogIn ? <Outlet/> : <Navigate to='/login'/>

}

export default PrivateRouter;