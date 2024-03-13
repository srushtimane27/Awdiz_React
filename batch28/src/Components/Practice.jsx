import React from 'react'

const Practice = ({employee}) => {
  console.log(employee, "Employee")
  return (
    <div>
      <h1>Prop Drilling = {employee}</h1>
    </div>
  )
}

export default Practice