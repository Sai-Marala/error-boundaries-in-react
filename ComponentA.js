import React from 'react'

const ComponentA=()=> {
    const [count,setCount]=React.useState(0);
    React.useEffect(()=>{
        if(count===5){
            throw new Error('App crashed from components');
        }
    },[count])
  return (
    <div>
        <center>
            <h1>ComponentA:{count}</h1>
            <button onClick ={()=> setCount(count+1)}>ComponentA Increment</button>
        </center>
      
    </div>
  )
}

export default ComponentA
