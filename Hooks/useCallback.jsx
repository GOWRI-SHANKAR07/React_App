import React from 'react'
import { useCallback } from 'react';

const UseCallback = () => {

    const handleButtonClick = useCallback(() => {
        console.log('Button clicked!');
    }, []);

    return (
        <div>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    )
}

export default UseCallback;