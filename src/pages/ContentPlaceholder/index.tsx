import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const index = () => {
    const [abStatus, setabStatus] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setabStatus(false)
        }, 2500);
    }, [])

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={classNames(styles.cardHeader, { [styles.animatedBg]: abStatus })} >
                    {
                        abStatus ? ' ' :
                            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />

                    }
                </div>
                <div className={styles.cardContent}>
                    <h3 className={classNames(styles.cardTitle, { [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>
                        {
                            abStatus ? ' ' : 'Lorem ipsum dolor sit amet'
                        }
                    </h3>
                    <p className={styles.cardExcerpt}>
                        {
                            abStatus ? ' ' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
                        }
                        <span className={classNames({ [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>&nbsp;</span>
                        <span className={classNames({ [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>&nbsp;</span>
                        <span className={classNames({ [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>&nbsp;</span>
                    </p>
                    <div className={styles.author}>
                        <div className={classNames(styles.profileImg, { [styles.animatedBg]: abStatus })}>
                            {
                                abStatus ? ' ' : <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                            }
                        </div>
                        <div className={styles.authorInfo}>
                            <strong className={classNames({ [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>
                                {
                                    abStatus ? ' ' : 'John Doe'
                                }
                            </strong>
                            <small className={classNames({ [styles.animatedBg]: abStatus }, { [styles.animatedBgText]: abStatus })}>
                                {
                                    abStatus ? ' ' : 'Oct 08, 2020'
                                }
                            </small>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default index;