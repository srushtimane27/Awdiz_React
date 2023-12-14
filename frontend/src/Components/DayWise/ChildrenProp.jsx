import React from 'react'

const Button = ({children}) => {
    return <button style={{color:'white', backgroundColor: 'black'}}>{children}</button>
}




const ChildrenProp = () => {
  return (
    // <Button>ChildrenProp</Button>
    <Button>Welcome</Button>
  )
}

export default ChildrenProp