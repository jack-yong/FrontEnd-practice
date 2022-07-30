import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

const index = () => {

    const int = useRef(0);
    const [num, setnNum] = useState(0);

    useEffect(() => {
        int.current = window.setInterval(() => {
            setnNum(pre => {
                return pre + 1;
            })
            if (num > 99) {
                clearInterval(int.current)
            }
        }, 30);
    }, [])

    const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
    return (
        <div className={styles.body}>
            <section className={styles.bg} style={{ filter: `blur(${scale(num, 0, 100, 30, 0)}px)` }}></section>
            <div className={styles.loadingText} style={{ opacity: `${scale(num, 0, 100, 1, 0)}` }} >{num}%</div>
        </div>
    )
}

export default index;