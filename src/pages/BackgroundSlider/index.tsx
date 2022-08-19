import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';


const index = () => {

    const imagearr = [
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
        'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    ]
    const [active, setActive] = useState(0);

    const numAdder = () => {
        if (active >= 4) {
            setActive(0);
        }
        else {
            const tempactive = active;
            console.log(tempactive);

            setActive(tempactive + 1);
        }
    }

    const numReduce = () => {
        if (active <= 0) {
            setActive(4);
        }
        else {
            const tempactive = active;
            // console.log(tempactive);
            setActive(tempactive - 1);
        }
    }

    //实现图片预加载
    useEffect(() => {
        imagearr.forEach(imgurl => {
            const img = new Image();
            img.src = imgurl;
        });
    }, [])


    return (
        <div className={styles.body} style={{ backgroundImage: `url(${imagearr[active]})` }}>
            <div className={styles.sliderContainer}>
                <div className={classNames(styles.slider)}
                    style={{ backgroundImage: `url(${imagearr[active]})` }}
                >
                </div>
                <button className={classNames(styles.arrow, styles.leftArrow)} onClick={numReduce}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button className={classNames(styles.arrow, styles.rightArrow)} onClick={numAdder}>
                    <i className='fas fa-arrow-right'></i>
                </button>
            </div>
        </div >
    )
}

export default index;