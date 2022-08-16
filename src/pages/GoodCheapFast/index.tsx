import React, { useState } from 'react';
import styles from './index.module.scss';

const index = () => {
    const [checkbox, setCheckBox] = useState([
        {
            msg: 'Good',
            checked: false,
        },
        {
            msg: 'Cheap',
            checked: false,
        },
        {
            msg: 'Fast',
            checked: false,
        }
    ]);

    function switchChange(idx: number) {
        const ncheckbox = checkbox.map((item, idx2) => {
            const tempItem = item;
            if (idx === idx2) {
                tempItem.checked = !tempItem.checked;
                return tempItem;
            }
            else {
                return tempItem;
            }
        });
        setCheckBox([...ncheckbox])

    }

    return (
        <div className={styles.body}>
            <h2 style={{ paddingBottom: '10px' }}>How do you want your project to be?</h2>
            {
                checkbox.map((item, idx) => (
                    <div className={styles.toggleContainer} key={idx}>
                        <input className={styles.toggle} id={item.msg} type={'checkbox'} onChange={() => switchChange(idx)}></input>
                        <label htmlFor={item.msg} className={styles.label} >
                            <div className={styles.ball}></div>
                        </label>
                        <span>{item.msg}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default index;