import classNames from "classnames/bind"
import styles from './BoxProduct.module.scss'
import Img from "../Img/Img"
import { Link } from "react-router-dom"
import { a1, a2, a3, a4 } from "../../assets/image"
const cx = classNames.bind(styles)

function BoxProduct({name, price, sale, }){
    return (
        <div className={cx('box')}>
            <div className={cx('boxImg')}>
                <Img src={a3} alt=''/>
                <span className={cx('sale')}>40%</span>
            </div>
            <Link to='/' className={cx('textName')}>Salomon XT-6 Expanse 'Alloy Quiet Shade'</Link>
            <p>1.920.000₫ <span>2.400.000₫</span></p> 
        </div>
        
    )
}

export default BoxProduct
