import React, { useEffect, useState } from 'react'
import styles from './index.module.scss';

interface keyDownEvetn {
    key: string,
    keyCode: number,
    code: string,
}

const index = () => {

    const [keyDownEvent, setKeyDownEvent] = useState<keyDownEvetn>();

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            setKeyDownEvent({ key: e.key, keyCode: e.keyCode, code: e.code })
        })
    }, [])

    return (
        <div className={styles.body}>
            {
                keyDownEvent ?
                    <>
                        <div className={styles.key}>
                            {keyDownEvent.key === ' ' ? 'Space' : keyDownEvent.key}
                            <small>event.key</small>
                        </div>
                        <div className={styles.key}>
                            {keyDownEvent.keyCode}
                            <small>event.keyCode</small>
                        </div>
                        <div className={styles.key}>
                            {keyDownEvent.code}
                            <small>event.code</small>
                        </div>
                    </>
                    :
                    <div className={styles.key}>
                        Press any key to get the keyCode
                    </div>
            }

        </div >
    )
}

export default index;