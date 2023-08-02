import React, { useContext } from 'react';
import MyContext from '../../Hooks/useContext';

const Context = () => {

    const data = useContext(MyContext)

    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    )
}

export default Context