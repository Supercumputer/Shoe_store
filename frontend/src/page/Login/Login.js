import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Img from '../../components/Img/Img';
import Logo from '../../assets/image/logo.jpg';
import { useState } from 'react';
import { apiLogin } from '../../api/service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authentication';
const cx = classNames.bind(styles);

function isEmail(value) {
    let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    return regex.test(value);
}

function isPassWord(value) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(value);
}

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const valid = {
        isValidEmail: false,
        isValidPassWord: false,
    };

    const [validation, setValidation] = useState(valid)

    const logInApi = async (data) => {
        try {
            let res = await apiLogin(data)
    
            if(res && res.status === 200){
                dispatch(login(res.data))
                toast.success('Đăng nhập thành công.')
                navigate('/')

            }
        } catch (error) {
            toast.error(error.response?.data.message)
        }
    }

    const handlerLogin = () => {
        setValidation(valid)
        if(email === '' && passWord === ''){
            setValidation(vali => ({...valid, isValidEmail: true, isValidPassWord: true}))
            return
        }else if(!isEmail(email)){
            setValidation(valid => ({...valid, isValidEmail: true}))
            return
        }else if(!isPassWord(passWord)){
            setValidation(valid => ({...valid, isValidPassWord: true}))
            return
        }
        logInApi({email, passWord})
       
    };

    return (
        <div className={cx('boxConten')}>
            <div className={cx('conten', 'col-6')}>
                <div className={cx('col-6')}>
                    <div className={cx('boxImg')}>
                        <Img src={Logo} />
                    </div>
                </div>
                <div className={cx('col-6')}>
                    <h2 className={cx('boms')}>LOGIN SHOE</h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                className={cx("form-control", {'is-invalid': validation.isValidEmail})}
                                aria-describedby="emailHelp"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={passWord}
                                className={cx("form-control", {'is-invalid': validation.isValidPassWord})}
                                onChange={(e) => setPassWord(e.target.value)}
                                placeholder="Password"
                            />
                        </div>

                        <button type="button" className="col-12 btn btn-primary" onClick={handlerLogin}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
