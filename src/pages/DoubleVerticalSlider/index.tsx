import React, { useRef, useState } from 'react';
import styles from './index.module.scss';

const sliderData = [
    {
        bgc: '#FD3555',
        // bgc: '#FFB866',
        title: 'Nature flower',
        desc: 'all in pink',
        img: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
    }
    ,
    {
        bgc: '#2A86BA',
        // bgc: '#FD3555',
        title: 'Bluuue Sky',
        desc: "with it's mountains",
        img: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
    }
    ,
    {
        bgc: '#252E33',
        // bgc: '#2A86BA',
        title: 'Lonely castley',
        desc: "in the wilderness",
        img: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
    }
    ,
    {
        bgc: '#FFB866',
        // bgc: '#252E33',
        title: 'Flying eagle',
        desc: "in the sunset",
        img: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
    }
]

const DoubleVerticalSlider = () => {
    const [pos, setPos] = useState(0);
    const [slideHeight, setSlideHeight] = useState<number>(0);
    const sliderContainerRef = useRef<HTMLDivElement>(null);

    const ChangeSlide = (direction: string) => {
        if (sliderContainerRef.current) {
            const height = sliderContainerRef.current.clientHeight;
            setSlideHeight(height);
            switch (direction) {
                case 'up':
                    if (pos === sliderData.length - 1) {
                        setPos(0);
                    }
                    else {
                        setPos(pos + 1)
                    }
                    break;
                case 'down':
                    if (pos === 0) {
                        setPos(sliderData.length - 1);
                    }
                    else {
                        setPos(pos - 1);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <div className={styles.body}>
            <div className={styles.sliderContainer} ref={sliderContainerRef}>
                <div className={styles.leftSlider} style={{ top: `-${(sliderData.length - 1) * 100}vh`, transform: `translateY(${pos * slideHeight}px)` }}>
                    {
                        sliderData.map((item, idx) => (
                            <div style={{ backgroundColor: `${item.bgc}` }} key={idx}>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.rightSlider} style={{ transform: `translateY(-${pos * slideHeight}px)` }}>
                    {
                        sliderData.map((item, idx) => (
                            <div style={{ backgroundImage: `url(${item.img})` }} key={idx}>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.downButton} onClick={() => ChangeSlide('down')}>
                        <i className='fas fa-arrow-down'></i>
                    </button>
                    <button className={styles.upButton} onClick={() => { ChangeSlide('up') }}>
                        <i className='fas fa-arrow-up'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoubleVerticalSlider;
