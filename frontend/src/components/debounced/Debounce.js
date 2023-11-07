import { useEffect, useState } from "react";

function Debounce(value, time) {
    const [debaoValue, setDebaoValue] = useState(value);

    useEffect(()=> {
        let id = setTimeout(()=> {
            setDebaoValue(value)
        }, time)

        return () => clearTimeout(id)
    }, [value])

    return debaoValue
}

export default Debounce;