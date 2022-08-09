import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const DrinkWater = () => {
    const [fullstatus, setFullStatus] = useState(new Array(8).fill(0));
    const percentageRef = useRef<HTMLDivElement>(null);
    const remainedRef = useRef<HTMLDivElement>(null);
    const [liters, setLiters] = useState(2);
    function renderCupSmall() {
        const smallCupList = []
        for (let i = 0; i < fullstatus.length; i++) {
            const smallCup =
                <div key={i} className={classNames(styles.cup, styles.cupSmall, { [styles.full]: fullstatus[i] })} onClick={(e) => { highlightCups(i, e) }}>
                    250 ml
                </div>
            smallCupList.push(smallCup);
        }
        return smallCupList;
    }


    return (
        <div className={styles.body}>
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>

            <div className={styles.cup}>
                <div className={styles.remained} ref={remainedRef}>
                    <span>{`${liters}L`}</span>
                    <small>Remained</small>
                </div>
                <div className={styles.percentage} ref={percentageRef}></div>
            </div>

            <p className={styles.text}>Select how many glasses of water that you have drank</p>
            <div className={styles.cups}>
                {
                    renderCupSmall()
                }
            </div>
        </div>
    )

    function highlightCups(idx: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (idx === 7 && e.currentTarget.classList.contains(styles.full)) {
            idx--;
        }
        else if (e.currentTarget.classList.contains(styles.full) && !e.currentTarget.nextElementSibling?.classList.contains(styles.full)) {
            idx--;
        }

        const nfullstatus = fullstatus.map((item, idx2) => {
            if (idx2 <= idx) {
                return 1;
            }
            else {
                return 0;
            }
        })
        setFullStatus(nfullstatus);
        updateBigCup(idx + 1);

    }

    function updateBigCup(fullCup: number) {
        const totalCups = fullstatus.length;
        if (percentageRef.current) {
            if (fullCup === 0) {
                percentageRef.current.style.visibility = 'hidden';
                percentageRef.current.style.height += 0;
            }
            else {
                percentageRef.current.style.visibility = 'visible';
                percentageRef.current.style.height = `${fullCup / totalCups * 330}px`;
                percentageRef.current.innerHTML = `${fullCup / totalCups * 100}%`;

            }
        }
        if (remainedRef.current) {
            if (fullCup === totalCups) {
                remainedRef.current.style.visibility = 'hidden';
                remainedRef.current.style.height += 0;
            }
            else {
                remainedRef.current.style.visibility = 'visible';
                setLiters(2 - (250 * fullCup / 1000));
            }
        }
    }
}

export default DrinkWater;