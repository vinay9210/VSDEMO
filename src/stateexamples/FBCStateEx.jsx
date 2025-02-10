import React from 'react'

const FBCStateEx = () => {

    const [value ,setvalue] = React.useState(0);
    console.log(value);
    const changevalue=()=>{
        setvalue(1000);  
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={changevalue}>ChangeValue</button>
        </div>
    )
}

export default FBCStateEx
