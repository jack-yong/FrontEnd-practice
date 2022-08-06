import React from 'react';
import styles from './index.module.scss';
const Loading = () => {
    return (
        <div className={styles.cell}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loading;