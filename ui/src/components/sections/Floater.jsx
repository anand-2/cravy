import React from 'react'



function Floater({img,top,left ,right,bottom}) {
  return (
    <img
    animate={{ rotate: 360 }}
    style={{ position: 'absolute', top: top, left: left, right: right, bottom: bottom }}
    src={img}
    alt=""
  />

  )
}

export default Floater