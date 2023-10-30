import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Img from '../../components/Img/Img';
import Logo from '../../assets/image/logo.jpg';
import { useState } from 'react';
import { apiRegister } from '../../api/service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function isEmail(value) {
    let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    return regex.test(value);
}

function isPassWord(value) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(value);
}

function isPhoneNumber(value) {
    let regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return regex.test(value);
}

function Register() {
    const navigate = useNavigate()
    const valid = {
        isValidFirstName: false,
        isValidLastName: false,
        isValidEmail: false,
        isValidPassWord: false,
        isValidPhone: false,
        isValidPassWord1: false,
        isValidDate: false,
        isValidSex: false,
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [phone, setPhone] = useState('');
    const [password1, setPassWord1] = useState('');
    const [date, setDate] = useState('');
    const [sex, setSex] = useState('');

    const [validation, setValidation] = useState(valid);

    const registerApi = async (data) => {
        try {
            let res = await apiRegister(data)
            if(res && res.status === 200){
                toast.success(res.data.message)
                navigate('/login')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handlerRegister = () => {

        setValidation(valid);

        if (firstName.trim() === '') {
            setValidation((vali) => ({ ...vali, isValidFirstName: true }));
            return;
        }

        if (lastName.trim() === '') {
            setValidation((vali) => ({ ...vali, isValidLastName: true }));
            return;
        }

        if (email.trim() === '') {
            setValidation((vali) => ({ ...vali, isValidEmail: true }));
            return;
        } else if (!isEmail(email)) {
            setValidation((vali) => ({ ...vali, isValidEmail: true }));
            return;
        }

        if (phone === '') {
            setValidation((vali) => ({ ...vali, isValidPhone: true }));
            return;
        } else if (!isPhoneNumber(phone)) {
            setValidation((vali) => ({ ...vali, isValidPhone: true }));
            return;
        }

        if (passWord.trim() === '') {
            setValidation((vali) => ({ ...vali, isValidPassWord: true }));
            return;
        } else if (!isPassWord(passWord)) {
            setValidation((vali) => ({ ...vali, isValidPassWord: true }));
            return;
        }

        if (password1 !== passWord) {
            setValidation((vali) => ({ ...vali, isValidPassWord1: true }));
            return;
        }

        if (date === '') {
            setValidation((vali) => ({ ...vali, isValidDate: true }));
            return;
        }

        if (sex === '') {
            setValidation((vali) => ({ ...vali, isValidSex: true }));
            return;
        }
     
        registerApi({ firstName, lastName, email, passWord, phone, date, sex });
    }         

    return (
        <div className={cx('boxConten')}>
            <div className={cx('conten', 'col-6')}>
                <div className={cx('col-6')}>
                    <div className={cx('boxImg')}>
                        <Img src={Logo} />
                    </div>
                </div>
                <div className={cx('col-6')}>
                    <h2 className={cx('boms')}>REGISTER SHOE</h2>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className={cx('form-control', { 'is-invalid': validation.isValidFirstName })}
                                placeholder="First name"
                                aria-label="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className={cx('form-control', { 'is-invalid': validation.isValidLastName })}
                                placeholder="Last name"
                                aria-label="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="col-12">
                            <input
                                type="email"
                                className={cx('form-control', { 'is-invalid': validation.isValidEmail })}
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-12">
                            <input
                                type="text"
                                className={cx('form-control', { 'is-invalid': validation.isValidPhone })}
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="col-12">
                            <input
                                type="password"
                                className={cx('form-control', { 'is-invalid': validation.isValidPassWord })}
                                placeholder="Password"
                                value={passWord}
                                onChange={(e) => setPassWord(e.target.value)}
                            />
                        </div>

                        <div className="col-12">
                            <input
                                type="password"
                                className={cx('form-control', { 'is-invalid': validation.isValidPassWord1 })}
                                placeholder="Nhap lai Password"
                                value={password1}
                                onChange={(e) => setPassWord1(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="date"
                                className={cx('form-control', { 'is-invalid': validation.isValidDate })}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <select
                                id="inputState"
                                className={cx('form-select', { 'is-invalid': validation.isValidSex })}
                                onChange={(e) => setSex(e.target.value)}
                                defaultValue=""
                            >
                                <option value="">Giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="LGBT">LGBT</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <button type="button" className="col-12 btn btn-primary" onClick={handlerRegister}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
