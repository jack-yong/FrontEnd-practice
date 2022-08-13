import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const index = () => {
    const [commitStatus, setCommitStatus] = useState('');
    const [rating, setRating] = useState(
        [{
            img: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png',
            desc: 'Unhappy',
            active: false
        },
        {
            img: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png',
            desc: 'Neutral',
            active: false
        },
        {
            img: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png',
            desc: 'Satisfied',
            active: true
        }
        ])

    function setRatingSelect(idx: number) {
        const nRating = rating.map((item, idx2) => {
            const tempItem = item;
            if (idx === idx2) {
                tempItem.active = true;
                return tempItem;
            }
            else {
                tempItem.active = false;
                return tempItem;
            }
        })

        setRating([...nRating]);
    }

    function reviewSend() {
        const selectItem = rating.find(item => item.active === true);
        selectItem && setCommitStatus(selectItem.desc);



    }

    return (
        <div className={styles.body}>
            <div className={styles.panelContainer}>
                {
                    !commitStatus ?
                        <>
                            <strong>How satisfied are you with our <br /> customer support performance?</strong>
                            <div className={styles.ratingsContainer}>
                                {
                                    rating.map((item, idx) => (
                                        <div key={idx} className={classNames(styles.rating, { [styles.active]: item.active })} onClick={() => setRatingSelect(idx)}>
                                            <img
                                                src={item.img}
                                                alt=''
                                            />
                                            <small>{item.desc}</small>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className={styles.btn} onClick={() => reviewSend()}>Send Review</button>
                        </>
                        :
                        <>
                            <i className="fas fa-heart" style={{ color: 'red', fontSize: '30px', marginBottom: '10px' }}></i>
                            <strong >Thank You!</strong>
                            <br />
                            <strong>{`Feedback: ${commitStatus}`} </strong>
                            <p style={{ margin: '1em 0' }}>{"We'll use your feedback to improve our customer support"}</p>
                        </>
                }
            </div>
        </div>
    )
}

export default index;