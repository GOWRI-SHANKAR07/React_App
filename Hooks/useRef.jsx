import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UseRef = () => {

    const [count, setCount] = useState('');

    const counts = useRef(0);

    useEffect(() => {
      counts.current = counts.current + 1;
    })
    

    return (
        <div>
            <input
                type='text'
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
            <p>{counts.current}</p>
        </div>
    )
}

export default UseRef