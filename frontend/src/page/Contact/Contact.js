import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Img from '../../components/Img/Img';
import { contact } from '../../assets/image';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('box')}>
            <div class={cx('row')}>
                <div class="col-6">
                    <div className={cx('boxImg')}>
                        <Img src={contact} alt="" />
                    </div>
                    <p className={cx('title')}>
                        Authentic Shoes international Được thành lập từ năm 2015, là chuỗi bán lẻ Sneaker, Streetwear và
                        phụ kiện thời trang chính hãng có thị phần số 1 Việt Nam với số lượt truy cập mua hàng tại
                        website authentic-shoes.com lên tới trên 10.000 lượt mỗi ngày từ khắp 63 tỉnh thành trên cả
                        nước.
                    </p>
                </div>
                <div className={cx('col-6', 'bum')}>
                    <h2>
                        ĐỊA CHỈ TRỤ SỞ: <span>Tầng 4 72 Tây Sơn Đống Đa</span>
                    </h2>
                    <h2>
                        SỐ ĐIỆN THOẠI: <span>0338973258</span>
                    </h2>
                    <h2>
                        EMAIL: <span>Service@AutheticShoes.com</span>
                    </h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.04525233786!2d105.73045058402418!3d21.05227809723914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134545768b86adb%3A0xe7d0c85e2fc64e2a!2zR2FtZSDEkMOobiBM4buTbmcgxJDhu48gMg!5e0!3m2!1svi!2s!4v1698419316463!5m2!1svi!2s"
                        width="600"
                        title="map"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
