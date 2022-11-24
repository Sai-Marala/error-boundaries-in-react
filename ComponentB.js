import React from 'react'

const ComponentB=()=> {
    const [count,setCount]=React.useState(0);
  return (
    <div>
        <hr/>
        <center>
            <h1>ComponentB:{count}</h1>
            <button onClick ={()=> setCount(count+1)}>ComponentB Increment</button>
        </center>
      
    </div>
  )
}

export default ComponentB
