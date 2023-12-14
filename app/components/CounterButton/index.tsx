'use client';

import { useState } from "react";

const CounterButton = () => {
    const [counter, setCounter] = useState(0);

    const counterPlus = () => {
        setCounter(counter + 1);
    }

    return (<>
        <div className="frame">
            <button className='btn btn-main' onClick={counterPlus}>Click me!</button>
            <div className="counterValues">{counter}</div>
        </div>
    </>)
}

export default CounterButton;