import React, { useEffect, useState } from 'react'

const UnMount = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let time = setTimeout(() => {
            setCount((count) => count + 1);

        }, 3000)

        return () => {
            clearTimeout(time);
            console.log("Cleared Timer!");
        }
    }, [])


    return (
        <div>
            <p>`Count : ${count}`</p>
        </div>
    )
}

export default UnMount;