import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from '../../components/Slide/Slide';
import BoxTh from '../../components/BoxTh/BoxTh';
import { newbalance, nike, addidas, puma, converse, jordan } from '../../assets/image';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <div className={cx('slide')}>
                <Slide />
            </div>
            <div className={cx('conten')}>
                <h2>Thương hiệu đồng hành</h2>
                <section className={cx('row')}>
                    <article className={cx('col-2')}>
                        <BoxTh src={addidas} alt="" />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxTh src={nike} alt="" />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxTh src={newbalance} alt="" />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxTh src={puma} alt="" />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxTh src={converse} alt="" />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxTh src={jordan} alt="" />
                    </article>
                </section>
                <h2>Sản phẩm bán chạy nhất</h2>
                <section className={cx('row')}>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                </section>
                <h2>Sản phẩm nổi bật</h2>
                <section className={cx('row')}>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <article className={cx('col-2')}>
                        <BoxProduct />
                    </article>
                    <div className={cx('boms')}>
                        <Link to="/products" className={cx('xt')}>
                            Xem them
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
