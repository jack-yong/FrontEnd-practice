import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface props {
    num: number,
}
const AnimatedCountDown = (props: props) => {
    const [num, setNum] = useState(props.num);
    const [instatus, setInStatus] = useState(true);
    const [outStatus, setOutStatus] = useState(false);
    const [hide, setHide] = useState(false);
    const animation = (e: any) => {
        if (e.animationName === styles.goIn) {
            setInStatus(false);
            setOutStatus(true);
            if (num === 0) {
                setHide(true);
            }
        }
        else {
            setInStatus(true);
            setOutStatus(false);
            setNum(num - 1);
        }

    }
    return (
        <>
            <div className={classNames({ [styles.count]: !hide }, { [styles.hide]: hide })}>
                <div className={styles.nums}>
                    <span
                        onAnimationEnd={(e) => { animation(e) }}
                        className={classNames({ [styles.out]: outStatus }, { [styles.in]: instatus })}
                    >
                        {num}
                    </span>
                </div>
                <h4 className={styles.h4font}>Get Ready</h4>
            </div>

            <div className={classNames(styles.final, { [styles.show]: hide })}>
                <h1>GO</h1>
                <button className={classNames(styles.replay)} onClick={() => { setNum(3); setHide(false); }}>
                    <span>Replay</span>
                </button>
            </div>
        </>

    )
}

export default AnimatedCountDown;