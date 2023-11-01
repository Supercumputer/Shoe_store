import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { useState } from "react"


const cx = classNames.bind(styles)

function Button({title, active, id, onClicks}){

    return (
        <button type="button" className={cx('but', {active: active})} onClick={onClicks}><span>{title}</span></button>
    )
}

export default Button