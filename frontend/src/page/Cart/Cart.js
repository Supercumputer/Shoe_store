import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Img from '../../components/Img/Img';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('box', 'd-flex')}>
            <div className={cx('col-9')}>
                <section className={cx('boxItem')}>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <div className={cx('pro')}>
                        <div className={cx('img')}>
                            <Img src={''} />
                        </div>
                        <p>wgoeggeqwrwqrqw</p>
                    </div>
                    <p className={cx('price')}>2000dd</p>
                    <div className={cx('product-counter')}>
                        <button className={cx('button')}>-</button>
                        <input type="text" value="1" className={cx('count')} />
                        <button className={cx('button')}>+</button>
                    </div>
                </section>
                <section className={cx('boxItem')}>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <div className={cx('pro')}>
                        <div className={cx('img')}>
                            <Img src={''} />
                        </div>
                        <p>wgoeggeqwrwqrqw</p>
                    </div>
                    <p className={cx('price')}>2000dd</p>
                    <div className={cx('product-counter')}>
                        <button className={cx('button')}>-</button>
                        <input type="text" value="1" className={cx('count')} />
                        <button className={cx('button')}>+</button>
                    </div>
                </section>
            </div>
            <div className={cx('col-3')}>
                <div className={cx('boxCen', 'bg-dark')}>
                    <div className={cx('check')}>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <span>Chọn Tất Cả</span>
                    </div>
                    <p>Tổng thanh toán: 5200</p>
                    <button className="btn col-12 btn-primary" type="button">
                        Mua hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
