import React, { useRef, useState } from 'react';
import styles from './index.module.scss';

interface Position {
    x: number | undefined,
    y: number | undefined,
}

const DrawingApp = () => {
    const [size, setSize] = useState(10);
    const [Pressed, setPressed] = useState(false);
    const [color, setColor] = useState('black');
    const [position, setPosition] = useState<Position>({ x: undefined, y: undefined });
    const CanvesRef = useRef<HTMLCanvasElement>(null);
    return (
        <div className={styles.body} onMouseUp={() => mouseUp()}>
            <canvas ref={CanvesRef} width='800' height='700' onMouseDown={(e) => mouseDown(e)} onMouseMove={(e) => mouseMove(e)}></canvas>
            <div className={styles.toolbox}>
                <button onClick={deCreaseBtn}>-</button>
                <span>{size}</span>
                <button onClick={inCreasebtn}>+</button>
                <input type={'color'} onChange={(e) => setColor(e.target.value)} ></input>
                <button onClick={clearCanves}>X</button>
            </div>
        </div>
    )

    function mouseUp() {
        setPressed(false);
        setPosition({ x: undefined, y: undefined });
    }

    function mouseDown(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        setPressed(true);
        const positionX = e.nativeEvent.offsetX;
        const positionY = e.nativeEvent.offsetY;
        setPosition({ x: positionX, y: positionY });
        // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    }

    function mouseMove(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
        if (Pressed) {
            const nPositonX = e.nativeEvent.offsetX;
            const nPositionY = e.nativeEvent.offsetY;
            if (position.x && position.y) {
                drawCircle(nPositonX, nPositionY);
                drawLine(position.x, position.y, nPositonX, nPositionY);
            }
            setPosition({ x: nPositonX, y: nPositionY });
        }
    }

    function drawCircle(x: number, y: number) {
        const ctx = CanvesRef.current?.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number) {
        const ctx = CanvesRef.current?.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color;
            ctx.lineWidth = size * 2;
            ctx.stroke();
        }
    }

    function inCreasebtn() {
        let nSize = size + 5;
        if (nSize > 50) {
            nSize = 50;
        }
        setSize(nSize);
    }

    function deCreaseBtn() {
        let nSize = size - 5;
        if (nSize < 5) {
            nSize = 5;
        }
        setSize(nSize);
    }

    function clearCanves() {
        if (CanvesRef.current) {
            const ctx = CanvesRef.current.getContext('2d');
            ctx?.clearRect(0, 0, CanvesRef.current.width, CanvesRef.current.height);
        }
    }



}

export default DrawingApp;