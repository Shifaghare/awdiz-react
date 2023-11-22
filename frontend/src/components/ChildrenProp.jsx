import React from 'react'

const ChildrenProp=()=>{
    return(
        <>
        <Abc>hello</Abc>
        <Bu>heyy</Bu>
        <Xyz>shifaa</Xyz>
        
        </>
    )
}

const Abc=({children})=>{
    return(
        <h1>{children}</h1>
    )
}


const Bu=({children})=>{
    return(
        <h1>{children}</h1>
    )
}

 const Xyz=({children})=>{
    return(
        <h1>{children}</h1>
    )
 }


export default ChildrenProp;










