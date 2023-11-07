import classNames from 'classnames/bind';
import styles from './BoxProduct.module.scss';
import Img from '../Img/Img';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function BoxProduct({ name, price, sale, img, id }) {
    return (
        <Link to={`/productItem/${id}`} className={cx('textName')}>
            <div className={cx('box')}>
                <div className={cx('boxImg')}>
                    <Img src={img} alt="" />
                    <span className={cx('sale')}>{sale}</span>
                </div>
                <p>{name}</p>
                <p>
                    {price}₫ <span>2.400.000₫</span>
                </p>
            </div>
        </Link>
    );
}

export default BoxProduct;
