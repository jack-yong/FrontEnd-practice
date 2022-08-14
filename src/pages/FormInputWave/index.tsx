import React from 'react';
import styles from './index.module.scss';

const index = () => {

    const formInfo = [
        {
            text: 'Email',
            type: 'text',
        }
        ,
        {
            text: 'Password',
            type: 'password',
        }
    ]

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Please Login</h1>
                <form>
                    {
                        formInfo.map((item, idx) => (
                            <div className={styles.formControl} key={idx}>
                                <input type={item.type} required></input>
                                <label>
                                    {
                                        item.text.split('').map((letter, idx2) => (
                                            <span key={idx2} style={{ transitionDelay: `${idx2 * 50}ms` }}>{letter}</span>
                                        ))
                                    }
                                </label>
                            </div>
                        ))
                    }
                    <button className={styles.btn}>Login</button>
                    <p className={styles.text} >{"Don't have an account?"} <a href="#/FormInputWave">Register</a> </p>
                </form>
            </div>
        </div>
    )
}

export default index