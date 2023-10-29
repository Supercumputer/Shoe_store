import classNames from "classnames/bind"
import styles from './Button.module.scss'


const cx = classNames.bind(styles)

function Button({title, active}){
    return (
        <button type="button" className={cx('but', {active: active})} ><span>{title}</span></button>
    )
}

export default Button