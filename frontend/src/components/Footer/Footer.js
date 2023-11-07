import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-4')}>
                        <div className={cx('box')}>
                            <div className={cx('logo')}>Shoe store</div>
                            <p>
                                Công Ty TNHH TM và Đầu Tư Quốc Tế Á Châu MST : 0109539054 Authentic Shoes - Nhà sưu tầm
                                và phân phối chính hãng các thương hiệu thời trang quốc tế hàng đầu Việt Nam
                            </p>
                            <div className={cx('boxIcon')}>
                                <div className={cx('ic')}>
                                    <i className="bi bi-facebook"></i>
                                </div>
                                <div className={cx('ic')}>
                                    <i className="bi bi-instagram"></i>
                                </div>
                                <div className={cx('ic')}>
                                    <i className="bi bi-tiktok"></i>
                                </div>
                                <div className={cx('ic')}>
                                    <i className="bi bi-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <div className={cx('box')}>
                            <h2 className={cx('name')}>Về chúng tôi</h2>
                            <p>Trang chủ</p>
                            <p>Giới thiệu</p>
                            <p>Sản phẩm</p>
                            <p>Khuyến mãi</p>
                            <p>Tin tức</p>
                            <p>Liên hệ</p>
                        </div>
                    </div>
                    <div className={cx('col-3')}>
                        <div className={cx('box')}>
                            <h2 className={cx('name')}>HƯỚNG DẪN & CHÍNH SÁCH</h2>
                            <p>Hướng dẫn mua hàng</p>
                            <p>Thẻ Thành Viên</p>
                            <p>Chính sách đổi trả & hoàn tiền</p>
                            <p>Chính sách thanh toán</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                    <div className={cx('col-3')}>
                        <div className={cx('box')}>
                            <h2 className={cx('name')}>HỆ THỐNG CỬA HÀNG</h2>
                            <p>Cơ sở 1: 561 Nguyễn Đình Chiểu Phường 2 - Quận3 - TP. Hồ Chí Minh</p>
                            <p>Hotline : 0786665444</p>
                            <p>Cở sở 2 : 70-72 Tây Sơn - Đống Đa - Hà Nội</p>
                            <p>Service@AutheticShoes.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
