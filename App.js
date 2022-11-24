import React from 'react'
import ErroBoundaries from './Components/ErrorBoundaries'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
const App=()=> {
  return (
    <div>
      <ErroBoundaries/>
        <ComponentA/>
        <ComponentB/>
      
      
    </div>
  )
}

export default App
