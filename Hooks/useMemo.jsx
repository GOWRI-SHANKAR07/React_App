import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

const UseMemo = () => {

    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();

    const calculateExpenseVale = (a, b) => {
        console.log("Calculating!!");
        return a * b;
    }

    const memoizedValue = useMemo(() => calculateExpenseVale(val1, val2) , [val1, val2])

    return (
        <div>
            <h4>Number 1</h4>
            <input 
                placeholder='enter a number'
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
            /><br/><br/>
            <h4>Number 2</h4>
            <input  
                placeholder='enter a number'
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
            />
            <p>Memoized Value : {memoizedValue}</p>
        </div>
    )
}

export default UseMemo