import classNames from "classnames/bind"
import styles from './BoxTh.module.scss'
import Img from "../Img/Img"

const cx = classNames.bind(styles)


function BoxTh({src, alt=""}){
    return(
        <div className={cx('box')}>
            <Img src={src} alt={alt}/>
        </div>
    )
}

export default BoxTh