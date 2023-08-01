import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
    }, [url])
    

    return [data]
};

export default UseFetch;