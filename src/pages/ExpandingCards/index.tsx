import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';


const index = () => {
    const [activeArr, setActiveArr] = useState(new Array(5).fill(0).fill(1, 0, 1));
    const imagearr = [
        {
            img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Explore The World'
        },
        {
            img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Wild Forest'
        },
        {
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
            title: 'Sunny Beach'
        },
        {
            img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            title: 'City on Winter'
        },

        {
            img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Mountains - Clouds'
        },
    ];

    function panelClick(pos: number) {
        console.log(activeArr, 'activeArractiveArr');
        //react对于复杂数据对象的更新好好的看下这部分
        //TODO
        const nactiveArr = activeArr.fill(0).fill(1, pos, pos + 1);
        setActiveArr([...nactiveArr]);
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {
                    activeArr.map((item, idx) => (
                        <div
                            className={classNames(styles.panel, { [styles.active]: item })}
                            key={idx}
                            style={{ backgroundImage: `url(${imagearr[idx].img})` }}
                            onClick={() => panelClick(idx)}
                        >
                            <h3>{imagearr[idx].title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default index