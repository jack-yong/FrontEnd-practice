import React, { useState } from 'react';
import classNames from 'classnames';
import './index.custome.scss';

const index = () => {
    const [mesArr, setMesArr] = useState([
        {
            title: "Why shouldn't we trust atoms?",
            text: "They make up everything",
            active: true,
        }
        ,
        {
            title: "What do you call someone with no body and no nose?",
            text: "Nobody knows.",
            active: false,
        }
        ,
        {
            title: "What's the object-oriented way to become wealthy?",
            text: "Inheritance.",
            active: false,
        }
        ,
        {
            title: "How many tickles does it take to tickle an octopus?",
            text: "Ten-tickles!",
            active: false,
        }
        ,
        {
            title: "What is: 1 + 1?",
            text: "Depends on who are you asking.",
            active: false,
        }
    ]);


    function faqToggle(idx: number) {
        const nMesArr = mesArr.map((item, idx2) => {
            const tempitem = item;
            if (idx2 === idx) {
                tempitem.active = !tempitem.active;
            }
            return tempitem;
        })

        setMesArr([...nMesArr]);
    }
    return (
        <div id='faqBody'>
            <h1>Frequently Asked Questions</h1>
            <div className='faqContainer'>
                {
                    mesArr.map((item, idx) => (
                        <div className={classNames('faq', { 'active': item.active })} key={idx}>
                            <h3 className={'faqTitle'}>
                                {item.title}
                            </h3>
                            <p className={'faqText'}>
                                {item.text}
                            </p>
                            <button className={'faqToggle'} onClick={() => faqToggle(idx)}>
                                <i className="fas fa-chevron-down"></i>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default index;