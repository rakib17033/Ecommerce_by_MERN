import React, { useEffect } from 'react'
import axios from 'axios';
const Temp = () => {
    const fetchApi = `http://localhost:5000/api/v1/products`;
    // const { data} = axios.get(fetchApi)

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/products`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
    }, [])
   
  return (
    <div>Temp</div>
  )
}

export default Temp