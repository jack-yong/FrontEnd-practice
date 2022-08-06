import React from 'react';
import { NavLink } from 'react-router-dom';
import { cardData } from './config'
import styles from './index.module.scss';

const Main = () => {

    return (
        <div>

            <section className={styles.wrapper}>
                <h2 className={styles.mytitle}>50天50个小项目</h2>
                <div className={styles.box}>

                    {
                        cardData.map((item, idx) => (
                            <NavLink key={idx} className={styles.card} to={item.to}>
                                <h3 className={styles.title}>{item.title}</h3>
                            </NavLink>
                        ))

                    }
                </div>
            </section>
        </div>


    )
}

export default Main;