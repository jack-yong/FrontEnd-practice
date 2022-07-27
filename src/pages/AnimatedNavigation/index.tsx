import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const AnimatedNavigation = () => {
    const [clickStatus, setClickStatus] = useState(false);

    return (
        <div className={styles.body}>
            <nav className={classNames({ [styles.active]: !clickStatus })}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className={styles.icon} onClick={() => { setClickStatus(!clickStatus) }}>
                    <div className={classNames(styles.line, styles.line1)}></div>
                    <div className={classNames(styles.line, styles.line2)}></div>
                </button>
            </nav>
        </div>
    )
}

export default AnimatedNavigation;