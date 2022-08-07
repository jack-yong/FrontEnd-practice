import React, { useRef, useState } from 'react';
import './index.custom.scss';

const DragNDrop = () => {
    const [select, setSelect] = useState([1, 0, 0, 0, 0]);
    const fillref = useRef<HTMLDivElement>(null);
    return (
        <div id="body">
            {
                select && select.map((item, idx) => (
                    <div className='empty' onDragOver={e => dragOver(e)} onDragEnter={e => dragEnter(e)} onDragLeave={(e) => dragLeave(e)} onDrop={(e) => dragDrop(e, idx)} key={idx}>
                        {
                            item === 1 ?
                                <div
                                    ref={fillref}
                                    className='fill'
                                    draggable={true}
                                    onDragStart={() => dragStart()}
                                    onDragEnd={() => dragEnd()}
                                ></div> :
                                <></>
                        }
                    </div>
                ))
            }
        </div>
    )

    function dragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function dragEnter(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.currentTarget.classList.add('hovered');
    }


    function dragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.className = 'empty';
    }

    function dragDrop(e: React.DragEvent<HTMLDivElement>, idx: number) {
        e.currentTarget.className = 'empty';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const nselect = select.map(item => 0);
        nselect[idx] = 1;
        setSelect(nselect);
    }

    function dragStart() {
        if (fillref.current) {
            fillref.current.classList.add('hold');
            setTimeout(() => {
                if (fillref.current) {
                    fillref.current.className = 'invisible';
                }
            }, 0)
        }
    }

    function dragEnd() {
        if (fillref.current) {
            fillref.current.className = 'fill';
        }
    }

}

export default DragNDrop;