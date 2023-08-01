import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [user, setUser] = useState('');
    const [displayUser, setDisplayUser] = useState('');

    useEffect(() => {
        if (displayUser.trim() != '') {
            console.log(displayUser);
            setUser('');
        }
    }, [displayUser]);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {displayUser ? (
                <h1>Welcome!, {displayUser}</h1>
            ) : (
                <>
                    <h3>Enter your name</h3>
                    <input
                        type='text'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <br />
                    <button onClick={() => setDisplayUser(user)}>Submit</button>
                </>
            )}
        </div>
    )
}

export default Effect;