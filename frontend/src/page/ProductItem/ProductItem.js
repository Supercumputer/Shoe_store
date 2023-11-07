import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Img from '../../components/Img/Img';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetProductId } from '../../api/service';
const cx = classNames.bind(styles);

function ProductItem() {
    let id = useParams()

    const [data, setData] = useState('')

    useEffect(()=>{
        callApiProduct(id.name)
    }, [])

    const callApiProduct = async (id) => {
        try{
            let res = await apiGetProductId(id)
            console.log(res)
            if(res && res.status === 200){
                setData(res.data.data)
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className={cx('box', 'd-flex')}>
            <div className="col-6">
                <div className={cx('boxImg')}>
                    <div className={cx('imgc')}>
                        <Img src={data.img} />
                    </div>
                    <div className={cx('imgp')}>
                        <div className={cx('imgb')}>
                            <Img src="" />
                        </div>
                        <div className={cx('imgb')}>
                            <Img src="" />
                        </div>
                        <div className={cx('imgb')}>
                            <Img src="" />
                        </div>
                        <div className={cx('imgb')}>
                            <Img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 pt-3">
                <h2>{data.name}</h2>
                <p>{data.price}</p>
                <p>Bảo Hiểm</p>
                <p>Vận Chuyển: </p>
                <div className={cx('product-counter')}>
                    <button className={cx('button')}>-</button>
                    <input type="text" value="1" className={cx('count')} />
                    <button className={cx('button')}>+</button>
                </div>
                <div className={cx('boxBtn', 'd-flex', 'gap-3')}>
                    <button className="btn btn-lg btn-outline-secondary">Thêm Vào Giỏ Hàng</button>
                    <button className="btn btn-primary btn-lg">Mua Ngay</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
