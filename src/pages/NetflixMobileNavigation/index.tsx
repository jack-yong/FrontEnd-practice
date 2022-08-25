import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const index = () => {
    const [status, setStatus] = useState(false);
    return (
        <div className={styles.body}>
            <button className={classNames(styles.navBtn, styles.openBtn)} onClick={() => setStatus(true)}>
                <i className="fas fa-bars"></i>
            </button>
            <img src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png' alt='Logo' className={styles.logo}></img>
            <p className={styles.text}>Mobile Navigation</p>
            <div className={classNames(styles.nav, styles.navBlack, { [styles.visible]: status })}>
                <div className={classNames(styles.nav, styles.navRed, { [styles.visible]: status })}>
                    <div className={classNames(styles.nav, styles.navWhite, { [styles.visible]: status })}>
                        <button className={classNames(styles.navBtn, styles.closeBtn)} onClick={() => setStatus(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png" alt="Logo" className={styles.logo}>
                        </img>
                        <ul className={styles.list}>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Life at Netflix</a></li>
                            <li>
                                <ul>
                                    <li><a href="#">Netflix culture memo</a></li>
                                    <li><a href="#">Work life balance</a></li>
                                    <li><a href="#">{'Inclusion & diversity'}</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;