import React, { useState, useEffect, use } from 'react'
const UseEffectEx = () => {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(1000);
        },5000);
        document.title = count;
    },[])
    return (
        <div>UseEffectEx
            <h1>{count}</h1>
        </div>
    )
}
export default UseEffectEx