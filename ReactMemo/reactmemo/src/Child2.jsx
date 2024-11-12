import React, { memo } from 'react'

const Child2 = ({p}) => {
    console.log("child2")
  return (
    <div>
       <h1>Child two component {p}</h1>
    </div>
  )
}

export default memo(Child2);
