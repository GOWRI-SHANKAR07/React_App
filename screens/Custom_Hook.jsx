import React from 'react'
import UseFetch from '../Hooks/custom'

const Custom_Hook = () => {

    const [data] = UseFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </div>
    )
}

export default Custom_Hook