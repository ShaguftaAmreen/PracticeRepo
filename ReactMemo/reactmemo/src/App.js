import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const App = () => {
  let [count,setCount]=useState(0);
  console.log("Parent")
  //dsfafsdfsdj;flsdaflkj

  /// testing git push with multiple folders
  ///hello world
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+2)}}>Increase Me By 2</button>
      {/* <Child1 p={1} /> */}
      <Child1 p={count} />
      <Child2 p={2} />
    </div>
  )
}

export default App

//memo()stops the rerendering of children when the props and states of child component is not getting changed.

