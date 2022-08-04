import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

const index = () => {
    const [jokeContent, setJokeContent] = useState('// Joke goes here');
    //在react18之后useeffect不添加依赖项自动执行两次的问题。
    const renderRef = useRef(true);
    const getJoke = async () => {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }
        const res = await fetch('https://icanhazdadjoke.com', config);
        const data = await res.json();
        setJokeContent(data.joke);
    }

    useEffect(() => {
        //react 18中useEffect默认是执行两次的
        if (renderRef.current) {
            getJoke();
            renderRef.current = false;
            return;
        }
    }, [])
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h3>Do not Laugh Challenge</h3>
                <div className={styles.joke}>{jokeContent}</div>
                <button className={styles.btn} onClick={() => getJoke()}>Get Another Joke</button>
            </div>
        </div>
    )
}

export default index