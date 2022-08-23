import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const index = () => {
    const [active, setActive] = useState(0);
    const imageArr = [
        {
            src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
            alt: 'home',
        }
        ,
        {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            alt: 'work',
        }
        ,
        {
            src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
            alt: 'blog',
        }
        ,
        {
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            alt: 'about',
        }
    ];

    const navArr = [
        {
            icon: 'fa-home',
            name: 'Home',
        }
        ,
        {
            icon: 'fa-box',
            name: 'Work',
        }
        ,
        {
            icon: 'fa-book-open',
            name: 'Blog',
        }
        ,
        {
            icon: 'fa-users',
            name: 'About Us',
        }
    ];
    return (
        <div className={styles.body}>
            <div className={styles.phone}>
                {
                    imageArr.map((item, idx) => {
                        return <img key={item.alt} src={item.src} alt={item.alt} className={classNames(styles.content, { [styles.show]: active === idx })}>

                        </img>
                    })
                }

                <nav>
                    <ul>
                        {
                            navArr.map((item, idx) => (
                                <li key={item.name} className={classNames({ [styles.active]: active === idx })} onClick={() => setActive(idx)}>
                                    <i className={`fas ${item.icon}`}></i>
                                    <p>{item.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default index