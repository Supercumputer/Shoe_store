import { Outlet, Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/authentication';
import { useEffect } from 'react';
import { apiGetAcount } from '../../api/service';
import Loading from '../Loading/Loading';

function PrivateRouter() {
    const disPatch = useDispatch()
    const {isLoading, auth} = useSelector((state) => state.auth);
  
    console.log(isLoading, auth)

    useEffect(() => {
        getAcountApi();
    }, []);

    const getAcountApi = async () => {
        try {
            let res = await apiGetAcount();
            if (res && res.status === 200) {
                disPatch(login(res.data))
            }
        } catch (error) {
            console.log(error)
        }
    };
    return isLoading ? <Loading/> : auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
      
}

export default PrivateRouter;
