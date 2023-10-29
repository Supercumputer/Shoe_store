import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Img from '../../components/Img/Img';
import Logo from '../../assets/image/logo.jpg';
import { useState } from 'react';
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
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const valid = {
        isValidEmail: false,
        isValidPassWord: false,
    };

    const [validation, setValidation] = useState(valid)

    const handlerLogin = () => {
        setValidation(valid)
        if(email === '' && password === ''){
            setValidation(vali => ({...valid, isValidEmail: true, isValidPassWord: true}))
        }else if(!isEmail(email)){
            setValidation(valid => ({...valid, isValidEmail: true}))
        }else if(!isPassWord(password)){
            setValidation(valid => ({...valid, isValidPassWord: true}))
        }
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
                                value={password}
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
