import { Outlet, Navigate, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/authentication';
import { useEffect } from 'react';
import { apiGetAcount } from '../../api/service';
import Loading from '../Loading/Loading';

function PrivateRouter() {
    const disPatch = useDispatch()
    const {isLoading, auth} = useSelector((state) => state.auth);
    const navigate = useNavigate()
  
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
            navigate('/login')
        }
    };
    return isLoading ? <Loading/> : auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
      
}

export default PrivateRouter;
