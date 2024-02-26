import React, { useState, useRef } from 'react';
import styles from "./Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);

    }

    const startIncrementInterval = () => {
        intervalRef.current = setInterval(incrementCount, 100);
    }

    const stopIncrementInterval = () => {
        clearInterval(intervalRef.current);
    }

    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className={styles.counter_container}>
                <p className={styles.count_display}>{count}</p>
                <button className={styles.counter_button} onClick={decrementCount}>Decrement</button>
                <button className={styles.counter_button} onClick={resetCount}>Reset</button>
                <button className={styles.counter_button} onClick={incrementCount}>Increment</button>
                <button
                    className={styles.counter_button}
                    onMouseDown={startIncrementInterval}
                    onMouseUp={stopIncrementInterval}
                    onMouseLeave={stopIncrementInterval}
                >
                    Increment 2
                </button>
            </div>
        </>
    )
}
