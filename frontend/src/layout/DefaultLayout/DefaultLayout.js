import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer.js';
const cx = classNames.bind(styles);

function HomeLayout({children}) {
    return (
        <div className={cx('boxContainer')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
