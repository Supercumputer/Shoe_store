import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { banner1, banner2, banner3 } from '../../assets/image';
const cx = classNames.bind(styles);

export default function Slide() {
    return (
        <div className={cx('boxSlide')}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className={cx('boxImg')}>
                        <img src={banner1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('boxImg')}>
                        <img src={banner2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('boxImg')}>
                        <img src={banner3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
