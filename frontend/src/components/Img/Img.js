import {useState} from 'react'
import { noImg } from '../../assets/image'

const Img = ({src, alt, ...props}) => {
    const [fallBack, setFallBack] = useState('')

    const handlerError = () => {
        setFallBack(noImg)
    }

    return <img src={fallBack || src} alt={alt} {...props} onError={handlerError}/>
}

export default Img