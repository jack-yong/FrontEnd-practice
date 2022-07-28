import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss';

interface props {
    //interface中使用？表示该值可以缺省,这种特性一般用来当作默认值
    text?: string,
    speedinit?: number,
}
const index = ({ speedinit = 1, text = 'We Love Programming!' }: props) => {
    const [mytext, setMytext] = useState(text);
    const [myspeed, setMySpeed] = useState(speedinit);
    const idx = useRef(1);

    const writeText = () => {
        setMytext(text.slice(0, idx.current))
        idx.current = idx.current + 1;
        if (idx.current > text.length) {
            idx.current = 1;
        }
    }

    useEffect(() => {
        setTimeout(writeText, 300 / myspeed);
    }, [mytext])

    return (
        <div className={styles.body}>
            <h1>{mytext}</h1>
            <div>
                <label >Speed:</label>
                <input type="number" name="speed" onChange={(e) => { setMySpeed(e.target.value as unknown as number) }} value={myspeed} min={1} max={10} step={1} />
            </div>
        </div>
    )
}

export default index;