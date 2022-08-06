import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const ButtonRippleEffect = () => {

    const [display, setDisplay] = useState(false);
    const [offset, setOffSet] = useState({ offsetX: 0, offsetY: 0 });
    const btnClick = (e: MouseEvent) => {
        const buttonTop = e.offsetX;
        const buttonLeft = e.offsetY;
        // console.log(buttonTop, buttonLeft);
        setOffSet({ offsetX: buttonTop, offsetY: buttonLeft });
        setDisplay(true);
        setTimeout(() => setDisplay(false), 500)

    }
    return (
        <div className={styles.body}>
            <button className={classNames(styles.button,)} onClick={(e) => { btnClick(e.nativeEvent) }}>Click Me
                <span className={classNames({ [styles.circle]: display })} style={{ top: `${offset.offsetY}px`, left: `${offset.offsetX}px` }}></span>
            </button>
        </div>
    )
}

export default ButtonRippleEffect;