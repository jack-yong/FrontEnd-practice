import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

type countData = {
    icon: string;
    num: number;
    desc: string;
}

const index = () => {

    const counterData = [
        {
            icon: 'fa-twitter',
            num: 12000,
            desc: 'Twitter Followers',
        }
        ,
        {
            icon: 'fa-youtube',
            num: 5000,
            desc: 'YouTube Subscribers',
        }
        , {
            icon: 'fa-facebook',
            num: 7500,
            desc: 'Facebook Fans',
        }
    ];

    const [numValue, setNumValue] = useState(new Array(3).fill(0));
    const loading = useRef(true);

    const updateCounter = (item: countData, idx: number) => {
        const increment = item.num / 200;
        if (numValue[idx] < item.num) {
            numValue[idx] = Math.ceil(numValue[idx] + increment);
            setNumValue([...numValue]);
            setTimeout(() => {
                updateCounter(item, idx);
            }, 1);
        }
        else {
            numValue[idx] = item.num;
            setNumValue([...numValue]);
        }
    }

    useEffect(() => {
        if (loading.current) {
            counterData.map((item, idx) => {
                updateCounter(item, idx);
            });
            loading.current = false;
        }
    }, [])


    return (
        <div className={styles.body}>
            {
                counterData.map((item, idx) => (
                    <div key={item.icon} className={styles.counterContainer}>
                        <i className={`fab  ${item.icon}  fa-3x`}></i>
                        <div className={styles.counter}>{numValue[idx]}</div>
                        <span>{item.desc}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default index