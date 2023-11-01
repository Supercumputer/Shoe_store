import classNames from "classnames/bind"
import styles from './BoxProduct.module.scss'
import Img from "../Img/Img"
import { Link } from "react-router-dom"
import { a1, a2, a3, a4 } from "../../assets/image"
const cx = classNames.bind(styles)

function BoxProduct({name, price, sale, img }){
    return (
        <div className={cx('box')}>
            <div className={cx('boxImg')}>
                <Img src={img} alt=''/>
                <span className={cx('sale')}>{sale}</span>
            </div>
            <Link to='/' className={cx('textName')}>{name}</Link>
            <p>{price}₫ <span>2.400.000₫</span></p> 
        </div>
        
    )
}

export default BoxProduct
