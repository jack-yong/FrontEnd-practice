import React, { createRef } from 'react';
import styles from './index.module.scss';

const index = () => {
    const lableRef = createRef<HTMLLabelElement>();

    const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (lableRef.current !== null) {
            const inputvalue = parseInt(e.target.value);
            const range_width = getComputedStyle(e.target).getPropertyValue('width');
            // console.log(inputvalue, 'inputvalueinputvalue');
            // console.log(range_width, 'range_widthrange_width');

            const lable_width = getComputedStyle(lableRef.current).getPropertyValue('width');

            const num_width = +range_width.substring(0, range_width.length - 2);
            const num_label_width = +lable_width.substring(0, lable_width.length - 2);
            // console.log(num_width, 'num_widthnum_width');
            // console.log(num_label_width, 'num_label_widthnum_label_width');

            const max = +e.target.max;
            const min = +e.target.min;

            const left = inputvalue * (num_width / max) - num_label_width / 2 + scale(inputvalue, min, max, 10, -10);
            //使用类型守卫，确保其值不是null;
            lableRef.current.style.left = `${left}px`;
            lableRef.current.innerHTML = inputvalue.toString();
        }



    }

    return (
        <div className={styles.body}>
            <h2>Custom Range Slider</h2>
            <div className={styles.rangeContainer}>
                <input type="range" id="range" min="0" max="100" onChange={e => inputChange(e)} />
                <label htmlFor='range' ref={lableRef}>50</label>
            </div>
        </div>
    )
}

export default index