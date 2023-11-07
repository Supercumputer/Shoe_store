import classNames from 'classnames/bind';
import styles from './BoxSearch.module.scss';
import Img from '../Img/Img';

const cx = classNames.bind(styles);

function BoxSearch({img, title, price}) {
    return (
        <div className={cx('boc')}>
            <div className={cx('img')}>
                <Img src={img} alt={''} />
            </div>

            <div className={cx('title')}>
                <p>{title}</p>
                <p>{price} đ</p>
            </div>
        </div>
    );
}

export default BoxSearch;
