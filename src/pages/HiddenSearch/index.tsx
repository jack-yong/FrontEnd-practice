import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const index = () => {

    const [active, setActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function searchStatusChange() {
        setActive(!active);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className={styles.body}>
            <div className={classNames(styles.search, { [styles.active]: active })} >
                <input ref={inputRef} type={'text'} className={styles.input} placeholder='Search...'></input>
                <button className={styles.btn} onClick={searchStatusChange}>
                    <i className="fas fa-search"></i>
                </button>
            </div>

        </div>
    )
}

export default index