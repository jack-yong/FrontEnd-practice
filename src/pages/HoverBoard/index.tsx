import React from 'react';
import styles from './index.module.scss';

const index = () => {

    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];


    function squares() {
        const SQUARES = 500
        const arr = []
        for (let i = 0; i < SQUARES; i++) {
            arr.push(<div className={styles.square} onMouseOver={e => setColor(e)} onMouseOut={e => removeColor(e)}></div>);
        }
        return arr;
    }

    const setColor = (element: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const color = getRandomColor();
        element.currentTarget.style.background = color;
        element.currentTarget.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    const removeColor = (element: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        element.currentTarget.style.background = '#1d1d1d';
        element.currentTarget.style.boxShadow = `0 0 2px #000`;
    }


    function getRandomColor() {
        //生成随机的下标
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {
                    squares()
                }
            </div>
        </div>
    )
}

export default index;