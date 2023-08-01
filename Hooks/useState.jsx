import React, { useState } from 'react'

const State = () => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSub = () => {
        setCount(count - 1);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={handleAdd}>Add</button> <br/>
            <button onClick={handleSub}>Substract</button>
        </div>
    )
}

export default State