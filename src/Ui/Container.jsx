import React from 'react'
const Container = (props) => {
  return(
    <div className='container mx-auto relative h-full'>
    {props.children}
    </div>
    )
}
export default Container;