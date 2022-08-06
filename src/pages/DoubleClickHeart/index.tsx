import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
// import ReactDOM from 'react-dom';

interface Item {
    top: string,
    left: string,
    // status:boolean,
}
const DoubleClickHeart = () => {

    const [count, setCount] = useState(0);
    const clickTimeRef = useRef<number>(0);
    // const heartStatusArr = useRef<Array<Item>>([]);
    const [heartStatusArr, setHeartStatusArr] = useState<Array<Item>>([])
    const doubleclickFun = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (clickTimeRef.current === 0) {
            clickTimeRef.current = new Date().getTime();
        }
        else {
            if (new Date().getTime() - clickTimeRef.current < 800) {
                showHeart(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                clickTimeRef.current = 0;
            }
            else {
                clickTimeRef.current = new Date().getTime();
            }
        }
    }

    const showHeart = (offsetX: number, offsetY: number) => {
        // const loveDom = ReactDOM.findDOMNode(loveMeRef.current);
        heartStatusArr.push({ top: `${offsetY}px`, left: `${offsetX}px` });
        setHeartStatusArr(heartStatusArr);
        setCount(count + 1);
        // setTimeout(() => {
        //     heartStatusArr.shift();
        //     setHeartStatusArr(heartStatusArr);
        //     console.log(heartStatusArr);
        // }, 1000);
        // console.log(heartStatusArr.current);

    }

    return (
        <div className={styles.body}>
            <h3>
                Double click on  the image to <i className={classNames('fas', 'fa-heart', styles.faHeart)}></i> it
            </h3>
            <small>You liked it <span >{count}</span> times</small>
            <div className={styles.loveMe} onClick={e => doubleclickFun(e)} >

                {
                    heartStatusArr && heartStatusArr.map((item: Item, idx: number) => (
                        <i key={idx} className={classNames('fas', 'fa-heart', styles.faHeart)} style={{ ...item }}></i>
                    ))
                }
            </div>
        </div>
    )
}

export default DoubleClickHeart