import React from 'react'

const Shimmer = () => {
  return (
    <div className="resturent-list">

    {Array(10)
    .fill("")
    .map((e) =>(
      <div className='shimmer-card'></div>
    ))}
   </div>
  )
}

export default Shimmer