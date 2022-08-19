import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

const index = () => {
  const imgs = [
    {
      src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
      alt: 'first-image',
    }
    ,
    {
      src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      alt: 'second-image',
    }
    ,
    {
      src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      alt: 'third-image',
    }
    ,
    {
      src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
      alt: 'fourth-image',
    }
  ];

  const [pos, setPos] = useState(0);
  const interval = useRef<number>();

  useEffect(() => {
    interval.current = window.setInterval(() => { changeImage(pos + 1) }, 2000);
    return () => clearInterval(interval.current);
  }, [pos])

  function changeImage(mypos: number) {
    if (mypos > imgs.length - 1) {
      setPos(0);
    }
    else if (mypos < 0) {
      setPos(imgs.length - 1);
    }
    else {
      setPos(mypos);
    }
  }

  function resetInterval() {
    clearInterval(interval.current);
    interval.current = window.setInterval(() => { changeImage(pos + 1) }, 2000);
    return () => clearInterval(interval.current);
  }

  function addIdx() {
    changeImage(pos + 1);
    resetInterval();
  }

  function delIdx() {
    changeImage(pos - 1);
    resetInterval();
  }


  return (
    <div className={styles.body}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer} style={{ transform: `translateX(${-pos * 500}px)` }}>
          {
            imgs.map((item => (
              <img loading='lazy' key={item.alt} src={item.src} alt={item.alt} />
            )))
          }
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.btn} onClick={delIdx}>Prev</button>
          <button className={styles.btn} onClick={addIdx}>Next</button>
        </div>
      </div>

    </div>
  )


}

export default index