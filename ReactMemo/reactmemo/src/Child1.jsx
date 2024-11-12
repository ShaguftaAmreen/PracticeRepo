import React, { memo } from 'react'

const Child1 = ({p}) => {
    console.log("child 1")
  return (
    <div>
      <h1>Child one component {p}</h1>
    </div>
  )
}


export default memo(Child1);
